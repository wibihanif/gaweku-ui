import axios from "axios";

const useAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: "https://jfe-test.devto.top",
  });

  return axiosInstance;
};

export default useAxiosInstance;
