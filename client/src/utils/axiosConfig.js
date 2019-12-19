import axios from "axios";

export const axiosConfig = () => {
  return axios.create({
    baseURL: "http://localhost:5000"
  });
};
