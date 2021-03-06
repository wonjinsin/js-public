import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ChatComponent from "@client/components/Chat/ChatComponent";
import { alertSet } from "@actions/alert";
import { chatInit, chatReceive } from "@actions/chat";
import { getChatContents } from "@axios/chat";
import socketio from "socket.io-client";

const ChatContainer = ({ alertSet, chatInit, chatReceive, chatInfo }) => {
  const [isLoading, setIsLoading] = useState(true);
  const socket = socketio.connect("http://localhost:38000");

  /* eslint-disable */
  useEffect(() => {
    const initRoom = () => {
      chatInit(1234);
      socket.emit("init", { room: 1234 });
    };

    const initGetContents = async () => {
      const contents = await getChatContents();
      chatReceive(contents.data);
    };

    const init = async () => {
      await initRoom();
      await initGetContents();
      setIsLoading(false);
    };

    init();
  }, []);
  /* eslint-enable */

  return !isLoading ? (
    <ChatComponent
      chatInit={chatInit}
      chatReceive={chatReceive}
      chatInfo={chatInfo}
      socket={socket}
      alertSet={alertSet}
    />
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    chatInfo: state.chat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alertSet: (obj) => {
      return dispatch(alertSet(obj));
    },
    chatInit: (obj) => {
      return dispatch(chatInit(obj));
    },
    chatReceive: (obj) => {
      return dispatch(chatReceive(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
