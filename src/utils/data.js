import axios from "axios";

export const setAxiosDefaultURL = (url) => (axios.defaults.baseURL = url);

export const fetchData = (method, url, params, handleData) => {
  if (method === "post") {
    return axios.post(`${url}`, params).then((res) => handleData(res.data));
  }
};
