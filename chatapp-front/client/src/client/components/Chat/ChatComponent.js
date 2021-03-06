import React, { useEffect, useState } from "react";
import styles from "@css/chat/chat.module.css";
import ChatHeaderComponent from "@client/components/Chat/Child/ChatHeaderComponent";
import ChatBodyComponent from "@client/components/Chat/Child/ChatBodyComponent";
import ChatBottomComponent from "@client/components/Chat/Child/ChatBottomComponent";

const ChatComponent = ({ socket }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* eslint-disable */
  useEffect(() => {
    setIsLoading(false);
  }, []);
  /* eslint-enable */

  return !isLoading ? (
    <div className={styles.chat}>
      <div className={styles.chatWrap}>
        <ChatHeaderComponent />
        <ChatBodyComponent />
        <ChatBottomComponent socket={socket} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ChatComponent;
