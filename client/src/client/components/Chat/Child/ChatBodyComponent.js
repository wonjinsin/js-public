import React from "react";
import styles from "@css/chat/chatInner.module.css";
import ChatContentsComponent from "@components/Chat/Child/ChatContentsComponent";

const ChatBodyComponent = () => {
  return (
    <div className={`${styles.chatBody} chatBody`}>
      <ChatContentsComponent />
    </div>
  );
};

export default ChatBodyComponent;
