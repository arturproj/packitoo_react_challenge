import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const setupHeaders = () => {
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
};

export const getBriefs = async () => {
  setupHeaders();
  const result = await axios.get(`${REACT_APP_API_URL}/briefs`);

  return result.data;
};

export const getProducts = async () => {
  setupHeaders();
  const result = await axios.get(`${REACT_APP_API_URL}/products`);
  return result.data;
};

export const postBrief = async (param) => {
  setupHeaders();
  const result = await axios.post(`${REACT_APP_API_URL}/briefs`, param);
  return result.data;
};

export const postProduct = async (param) => {
  setupHeaders();
  const result = await axios.post(`${REACT_APP_API_URL}/products`, param);
  return result.data;
};
