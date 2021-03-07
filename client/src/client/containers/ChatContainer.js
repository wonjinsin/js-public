import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ChatComponent from "@client/components/Chat/ChatComponent";
import { chatInitRoom, chatReceive } from "@actions/chat";
import socketio from "socket.io-client";

const ChatContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const socket = socketio.connect("http://localhost:38000");
  const dispatch = useDispatch();

  /* eslint-disable */
  useEffect(() => {
    const initRoom = () => {
      dispatch(chatInitRoom(1234));
      socket.emit("init", { room: 1234 });
    };

    const setSocketAction = () => {
      socket.on("send message", (data) => {
        dispatch(chatReceive(data));
      });
    };

    const init = async () => {
      await initRoom();
      setSocketAction();
      setIsLoading(false);
    };

    init();
  }, []);
  /* eslint-enable */

  return !isLoading ? <ChatComponent socket={socket} /> : <></>;
};

export default ChatContainer;
