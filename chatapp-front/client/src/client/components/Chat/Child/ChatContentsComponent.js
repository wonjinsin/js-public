import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChatContents } from "@axios/chat";
import styles from "@css/chat/chatContents.module.css";
import ChatSendComponents from "@components/Chat/Child/ChatSendComponents";
import ChatReceiveComponents from "@components/Chat/Child/ChatReceiveComponents";

const ChatContentsComponent = () => {
  const [prevMessages, setPrevMessages] = useState([]);
  const newMessages = useSelector((state) => state.chat.chatContents);

  /* eslint-disable */
  useEffect(() => {
    const getPrevMessages = async () => {
      const receivedPrevMessages = await getChatContents();
      let receivedPrevMessagesArr = [];
      if (receivedPrevMessages.resultCode === 200 && Object.keys(receivedPrevMessages.data).length) {
        for (const value of Object.values(receivedPrevMessages.data)) {
          prevMessages.push(value);
        }
        setPrevMessages([...prevMessages, ...receivedPrevMessagesArr]);
      }
    };

    getPrevMessages();
  }, []);

  useEffect(() => {
    const chatBody = document.querySelector(".chatBody");
    const chatContents = document.querySelector(".chatContents");
    chatBody.scrollTo(0, chatContents.clientHeight);
    console.log(chatBody.offsetHeight);
    console.log(newMessages);
  }, [newMessages]);
  /* eslint-enable */

  return (
    <div className={`${styles.chatContents} chatContents`}>
      {prevMessages.length &&
        prevMessages.map((item, key) =>
          item.name === "user1" ? (
            <ChatReceiveComponents key={key} message={item.message} date={item.date} />
          ) : (
            <ChatSendComponents key={key} message={item.message} date={item.date} />
          )
        )}
      {newMessages.map((item, key) =>
        item.name === "user1" ? (
          <ChatReceiveComponents key={key} message={item.message} date={item.date} />
        ) : (
          <ChatSendComponents key={key} message={item.message} date={item.date} />
        )
      )}
    </div>
  );
};

export default ChatContentsComponent;
