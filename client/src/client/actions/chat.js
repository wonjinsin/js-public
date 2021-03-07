import { CHAT_INIT_ROOM, CHAT_RECEIVE } from "@client/actions/actionTypes";

export const chatInitRoom = (roomNumber = "") => {
  return {
    type: CHAT_INIT_ROOM,
    roomNumber
  };
};

export const chatReceive = (contents = {}) => {
  return {
    type: CHAT_RECEIVE,
    contents
  };
};
