import React, { useEffect } from "react";
import styles from "@css/chat/chatInner.module.css";
import ChatContentsComponent from "@components/Chat/Child/ChatContentsComponent";

const ChatBodyComponent = ({ chatInfo, socket }) => {
  useEffect(() => {
    const chatBody = document.querySelector(".chatBody");
    chatBody.scrollTo(0, chatBody.clientHeight);
  }, []);

  return (
    <div className={`${styles.chatBody} chatBody`}>
      <ChatContentsComponent chatInfo={chatInfo} socket={socket} />
    </div>
  );
};

export default ChatBodyComponent;
