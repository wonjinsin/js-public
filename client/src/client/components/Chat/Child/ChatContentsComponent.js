import React, { useState, useEffect } from "react";
import styles from "@css/chat/chatContents.module.css";
import ChatSendComponents from "@components/Chat/Child/ChatSendComponents";
import ChatReceiveComponents from "@components/Chat/Child/ChatReceiveComponents";

const ChatContentsComponent = ({ chatInfo, socket }) => {
  const [newChatArray, setNewChatArray] = useState([]);
  
  useEffect(() => {
    console.log(newChatArray);
  }, [newChatArray]);

  socket.on("message", (data) => {
    setNewChatArray([...newChatArray, ...data]);
  });

  return (
    <div className={styles.chatContents}>
      {chatInfo.chatContents.map((item, key) =>
        item.name === "user1" ? (
          <ChatReceiveComponents key={key} content={item.content} date={item.date} />
        ) : (
          <ChatSendComponents key={key} content={item.content} date={item.date} />
        )
      )}
      {newChatArray.map((item, key) =>
        item.name === "user1" ? (
          <ChatReceiveComponents key={key} content={item.content} date={item.date} />
        ) : (
          <ChatSendComponents key={key} content={item.content} date={item.date} />
        )
      )}
    </div>
  );
};

export default ChatContentsComponent;
