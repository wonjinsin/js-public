import React from "react";
import styles from "@css/chat/chatContents.module.css";

const ChatReceiveComponents = ({message, date}) => {
  return (
    <div className={`${styles.receiveBox} ${styles.commonBox}`}>
      <div>{message}</div>
      <span>{date}</span>
    </div>
  );
};

export default ChatReceiveComponents;
