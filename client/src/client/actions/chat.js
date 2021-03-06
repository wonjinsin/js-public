import { CHAT_INIT, CHAT_RECEIVE } from "@client/actions/actionTypes";

export const chatInit = (roomNumber = "") => {
  return {
    type: CHAT_INIT,
    roomNumber
  };
};

export const chatReceive = (contents = {}) => {
  return {
    type: CHAT_RECEIVE,
    contents
  };
};
