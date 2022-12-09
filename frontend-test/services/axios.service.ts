import axios from "axios";

const axiosServices = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

axiosServices.interceptors.request.use(
  function (config: any) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken)
      config.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
        "accessToken",
      )}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosServices.interceptors.response.use(
  (response) => {
    // return get(response, "data", {});
    return response?.data || {};
  },
  (error) => {
    if (!!error?.response?.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong!",
    );
  },
);

export default axiosServices;
