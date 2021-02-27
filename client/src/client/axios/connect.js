import axios from "axios";

export const chkConnectToken = (token = "") => {
  return axios
    .post(`/front/api/v2/connect/token`, {token}, {
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