import React from "react";
import styles from "@css/chat/chatContents.module.css";

const ChatReceiveComponents = ({content, date}) => {
  return (
    <div className={`${styles.receiveBox} ${styles.commonBox}`}>
      <div>{content}</div>
      <span>{date}</span>
    </div>
  );
};

export default ChatReceiveComponents;
