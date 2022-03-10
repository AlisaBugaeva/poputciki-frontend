import axios from "axios";


// Default settings
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.common["Token"] = getAccessToken();

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //const requestConfig = error.config;
    if (
      error.response &&
      error.response.status === 401
    ) {
      return; // have to reset token!
    }
    throw error;
  }
);

function getAccessToken(){
  return localStorage.getItem("Token");
}