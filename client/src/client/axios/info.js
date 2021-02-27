import axios from "axios";

export const getUserAttrInfo = () => {
  return axios
    .get(`/front/api/v2/member/attribute`, {
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
