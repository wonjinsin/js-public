import axios from "axios";

export const getChatContents = () => {
  return axios
    .get(`/front/api/v1/chat`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};