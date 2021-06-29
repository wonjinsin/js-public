import { CHAT_INIT_ROOM, CHAT_RECEIVE } from "@client/actions/actionTypes";

const initialState = {
  roomNumber: null,
  chatContents: [],
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_INIT_ROOM:
      return {
        ...state,
        roomNumber: action.roomNumber,
      };
    case CHAT_RECEIVE:
      return {
        ...state,
        chatContents: [...state.chatContents, action.contents],
      };
    default:
      return state;
  }
};

export default chat;
