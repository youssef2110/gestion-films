import axios from "axios";

export const get = (url) => {
  let response;
  response = axios.get(`${url}`);
  return response;
};
export const patch = (url, data) => {
  let response;
  response = axios.patch(`${url}`, data);
  return response;
};

export const deleteRequest = (url) => {
  let response;
  response = axios.delete(`${url}`);
  return response;
};
