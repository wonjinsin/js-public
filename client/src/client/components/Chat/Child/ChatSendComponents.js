import React from "react";
import styles from "@css/chat/chatContents.module.css";

const ChatSendComponents = ({message, date}) => {
  return (
    <div className={`${styles.sendBox} ${styles.commonBox}`}>
      <span>{date}</span>
      <div>{message}</div>
    </div>
  );
};

export default ChatSendComponents;
