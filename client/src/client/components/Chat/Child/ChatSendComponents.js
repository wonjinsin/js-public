import React from "react";
import styles from "@css/chat/chatContents.module.css";

const ChatSendComponents = ({content, date}) => {
  return (
    <div className={`${styles.sendBox} ${styles.commonBox}`}>
      <span>{date}</span>
      <div>{content}</div>
    </div>
  );
};

export default ChatSendComponents;
