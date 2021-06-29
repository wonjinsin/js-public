import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import UseInput from "@utils/UseInput";
import { RightOutlined } from "@ant-design/icons";
import styles from "@css/chat/chatInner.module.css";

const ChatBottomComponent = ({ socket }) => {
  const nameArray = ["user1", "user2"];
  const message = UseInput("");
  const sendMessage = () => {
    if(!message.value) return false;
    const name = nameArray[Math.floor(Math.random() * nameArray.length)];
    const data = { name, room: 1234, message: message.value };
    socket.emit("send message", data);
    message.reset("");
  };
  const enterHandler = (e) => {
    e.key === "Enter" && sendMessage();
  };

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
