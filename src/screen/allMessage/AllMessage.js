import React, { useEffect, useState } from 'react';
import './AllMessage.scss';
import { allMessage } from '../../Helpers';
import axios from 'axios';
//COMPONENT
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import CardReceiveMessage from '../../component/card/cardReceiveMessage/CardReceiveMessage';
import NoImageProduct from '../../component/picture/NoImageProduct.js/NoImageProduct';
import Loader from 'react-loader';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getConversationAction } from '../../redux/actions/ChatAction';

export default function AllMessage({ location, history }) {
  // STATE
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // REDUX
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversationReducer);

  useEffect(() => {
    (async () => {
      const userId = await localStorage.getItem('userId');
      setUserId(userId);
    })();
  });

  useEffect(() => {
    const getConversations = async () => {
      try
      {
        const userId = await localStorage.getItem('userId');
        await dispatch(getConversationAction(userId));
        setIsLoading(false);
      } catch (err)
      {
        console.log(err);
      }
    };
    getConversations();
  }, [userId]);

  if (conversations?.isLoading || Object.keys(conversations).length === 0)
  {
    return <Loader loaded={false} color="green" />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderGreen title="Messages" />
      <div className="container_allmessage" style={{ flex: '1' }}>
        {/* {conversations?.map((msg, index) => {
          return (
            <>
              <CardReceiveMessage
                conversation={msg}
                chatId={msg?._id}
                currentUser={userId}
                history={history}
                key={index}
                pictureProduct={msg?.pictureProduct}
                titleProduct={msg?.titleProduct}
                userName={msg?.userName}
                index={index}
                arrayLength={allMessage?.length}
                iconNoImage={<NoImageProduct icon={msg?.category} />}
              />
            </>
          );
        })} */}
      </div>
    </div>
  );
}
