import axios from "axios";

export const getSocialCallback = (sendInfo) => {
  return axios
    .get(`/front/api/v3/callback?sns=${sendInfo.sns}&code=${sendInfo.code}&state=${sendInfo.state}`, {
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const getSocialToggle = (sendInfo) => {
  return axios
    .get(`/front/api/v3/toggle?sns=${sendInfo.sns}&code=${sendInfo.code}&state=${sendInfo.state}`, {
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const getSocialLogin = (sns) => {
  return axios
    .get(`/front/api/v3/auth?sns=${sns}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const getSocialList = (sns) => {
  return axios
    .get(`/front/api/v3/list`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};