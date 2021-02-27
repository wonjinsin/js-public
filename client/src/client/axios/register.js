import axios from "axios";

export const registerUser = (sendInfo) => {
  const formData = new FormData();
  formData.append("email", sendInfo.email.trim());
  formData.append("password", sendInfo.password);
  Object.keys(sendInfo.clients).length &&
    formData.append("clients", JSON.stringify(sendInfo.clients));
  sendInfo.social.social_id && formData.append("social", JSON.stringify(sendInfo.social));
  formData.append("attributes", JSON.stringify(sendInfo.attributes));

  return axios
    .post(`/front/api/v1/register`, formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return 400;
    });
};
