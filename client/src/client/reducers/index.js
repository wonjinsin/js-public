import { combineReducers } from 'redux';
import alert from "@reducers/alert";
import chat from "@client/reducers/chat";

export default combineReducers({
  alert,
  chat,
});