import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import UseInput from "@utils/UseInput";
import { RightOutlined } from "@ant-design/icons";
import styles from "@css/chat/chatInner.module.css";

const ChatBottomComponent = ({ socket }) => {
  const userArray = ["user1", "user2"];
  const message = UseInput("");
  const sendMessage = () => {
    const user = userArray[Math.floor(Math.random() * userArray.length)];
    const data = { user, room: 1234, message: message.value };
    socket.emit("send message", data);
    message.reset("");
  };
  const enterHandler = (e) => {
    e.key === "Enter" && sendMessage();
  };
  
  socket.on("send message", (data) => {
    console.log(data);
  });

  return (
    <div className={styles.chatBottom}>
      <Input
        placeholder="Basic usage"
        value={message.value}
        onChange={message.onChange}
        onKeyPress={enterHandler}
      />
      <button onClick={() => sendMessage()}>
        <RightOutlined style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default ChatBottomComponent;
