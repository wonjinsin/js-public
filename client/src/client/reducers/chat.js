import { CHAT_INIT, CHAT_RECEIVE } from "@client/actions/actionTypes";

const initialState = {
  roomNumber: null,
  chatContents: [],
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_INIT:
      console.log("CHAT_INIT");
      return {
        ...state,
        roomNumber: action.roomNumber,
      };
    case CHAT_RECEIVE:
      console.log("CHAT_RECEIVE");
      const newChatContents = action.contents;
      let newChatContentsArray = [];
      if (Object.keys(newChatContents).length) {
        for (const value of Object.values(newChatContents)) {
          newChatContentsArray.push(value);
        }
      }
      return {
        ...state,
        chatContents: [...newChatContentsArray],
      };
    default:
      return state;
  }
};

export default chat;
