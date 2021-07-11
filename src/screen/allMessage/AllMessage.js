import React, { useEffect, useState } from 'react';
import './AllMessage.scss';
import { allConversation } from '../../Helpers';
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
    // get conversationList
    GetConversations(userStore.user._id, userStore.token)
      .then((res) => {
        console.log(res, "resresres")
        setState({ ...state, conversations: res, isLoading: false })
      })
      .catch((err) => {
        // handle erros setErros
      });
  }, []);

  if (state.isLoading)
  {
    return <Loader loaded={false} color="green" />;
  }
  return (
    <>
      <Navbar history={props.history} />
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
                  conversationData={msg}
                  props={props}
                // history={history}
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