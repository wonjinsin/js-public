import axios from "axios";

export const updateEmail = (sendInfo) => {
  const formData = new FormData();
  formData.append("email", sendInfo.newEmail.trim());
  formData.append("prevEmail", sendInfo.email.trim());
  formData.append("password", sendInfo.password);

  return axios
    .put(`/front/api/v1/email/reset`, formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const userAttrUpdate = (sendInfo) => {
  const formData = new FormData();
  typeof sendInfo["marketting_email"] !== "undefined" &&
    formData.append("marketting_email", sendInfo["marketting_email"].toString());

  return axios
    .put(`/front/api/v1/attribute/update`, formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const userRemove = (password = "") => {
  const formData = new FormData();
  formData.append("password", password);

  return axios
    .delete(`/front/api/v1/member/remove`, {
      data: {
        password,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
