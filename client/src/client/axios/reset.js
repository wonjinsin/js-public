import axios from "axios";

export const resetPassword = (sendInfo) => {
  const formData = new FormData();
  formData.append("email", sendInfo.email.trim());
  formData.append("password", sendInfo.password);

  return axios
    .post(`/front/api/v1/password/reset`, formData, {
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