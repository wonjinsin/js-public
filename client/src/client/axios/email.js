import axios from "axios";

export const sendEmailCode = async (email = "") => {
  const formData = new FormData();
  formData.append("email", email.trim());

  return axios
    .post("/front/api/v1/email", formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return 400;
    });
};

export const chkEmailCode = (email = "", code = "") => {
  const formData = new FormData();
  formData.append("email", email.trim());
  formData.append("code", code);

  return axios
    .post(`/front/api/v1/email/code`, formData)
    .then((response) => {
      return parseInt(response.data);
    })
    .catch((error) => {
      return 400;
    });
};

export const sendResetPasswordEmail = (email = "") => {
  const formData = new FormData();
  formData.append("email", email.trim());

  return axios
    .post(`/front/api/v1/email/reset_password`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const validateCode = (code = "") => {
  return axios
    .post(
      `/front/api/v1/email/validateCode`,
      { code },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
