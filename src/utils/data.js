import axios from "axios";

export const setAxiosDefaultURL = (url) => (axios.defaults.baseURL = url);

export const fetchData = (method, url, handleData) => {
  if (method === "post") {
    return axios.post(`${url}`).then((res) => handleData(res.data));
  }
};
