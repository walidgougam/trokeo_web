import React, { useEffect, useState } from 'react';
import './AllMessage.scss';
import { allMessage } from '../../Helpers';
import axios from 'axios';
import Loader from 'react-loader';
/** COMPONENT */
import { HeaderGreen, Navbar, Footer, CardReceiveMessage, NoImageProduct } from '../../component/index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { getConversationAction } from '../../redux/actions/ChatAction';
/** SERVICES */
import { GetConversations } from "../../services/chatService";

function AllMessage(props) {
  /** STATE */
  const [state, setState] = useState({
    userId: '',
    conversations: [],
    isLoading: false
  })
  /** REDUX */
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.authReducer);

  useEffect(() => {
    console.log(userStore.user._id, "ZONE")
    // get conversationList
    GetConversations(userStore.user._id, userStore.token)
      .then((res) => {
        console.log(res, "resresres")
        setState({ ...state, conversations: res })
        setState({ ...state, isLoading: false })
      })
      .catch((err) => {
        // handle erros setErros
      });
  }, []);

  // useEffect(() => {
  //   const getConversations = async () => {
  //     try
  //     {
  //       const userId = await localStorage.getItem('userId');
  //       await dispatch(getConversationAction(userId));
  //       setIsLoading(false);
  //     } catch (err)
  //     {
  //       console.log(err);
  //     }
  //   };
  //   getConversations();
  // }, [userId]);

  if (state.isLoading)
  {
    return <Loader loaded={false} color="green" />;
  }

  return (
    <>
      <Navbar props={props} />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <HeaderGreen title="Messages" />
        <div className="container_allmessage" style={{ flex: '1' }}>
          {state.conversations?.map((msg, index) => {
            return (
              <>
                <CardReceiveMessage
                  // deleteMessage={() => {
                  //   getAllRecieverChat();
                  //   setDeletedMessage(true);
                  // }}
                  product={msg.product}
                  sender={msg?.reciever?.firstName}
                  message={msg?.messages[0]?.text}
                  picture={msg?.product?.productPicture[0].picture}
                  createdAt={msg?.createdAt}
                  recieverId={msg?.reciever?._id}
                  category={msg?.product?.category}
                // conversation={msg}
                // chatId={msg?._id}
                // currentUser={userId}
                // history={history}
                // key={index}
                // pictureProduct={msg?.pictureProduct}
                // titleProduct={msg?.titleProduct}
                // userName={msg?.userName}
                // index={index}
                // arrayLength={allMessage?.length}
                // iconNoImage={<NoImageProduct icon={msg?.category} />}
                />
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </>)
}

export default AllMessage