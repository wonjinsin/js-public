import React from "react";
import "antd/dist/antd.css";
import "@css/chat/chatInner.css";
import styles from "@css/chat/chatInner.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ChatHaederComponent = () => {
  return (
    <div className={styles.chatHeader}>
      <Avatar icon={<UserOutlined />} size={35} />
      <span className={styles.userName}>원진신</span>
      <span className={styles.roomNumber}>(#5984)</span>
    </div>
  );
};

export default ChatHaederComponent;
