import axios from "axios";

export const loginUser = (sendInfo) => {
  const formData = new FormData();
  formData.append("email", sendInfo.userId.trim());
  formData.append("password", sendInfo.password);
  formData.append("client_id", sendInfo.client_id);
  formData.append("keepalive", sendInfo.keepalive);

  return axios
    .post(`/front/api/v1/login`, formData, {
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

export const getLoginInfo = () => {
  return axios
    .post(`/front/api/v2/logincheck`, {
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

export const getLogout = () => {
  return axios
    .post(`/front/api/v2/logout`, {
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

export const getLoginCode = (data) => {
  return axios
    .post(
      `/front/api/v2/logincode`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
