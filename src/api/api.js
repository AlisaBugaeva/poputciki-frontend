import axios from "axios";
import "./axios";

// Requests Auth


// Requests Users
export const getTop5Places = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/places?limit=5`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const getNewTrips = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/trips/latest?limit=4&page=0`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const tripSearch = async (startPoint, finishPoint, startDate,okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/trips/search?fromTime=${startDate}&fromPoint=${startPoint}&toPoint=${finishPoint}&limit=5&page=0`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};


export const findPlaces = async (name, okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/places?name=${name}`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};




export const doLogin = async (email,password, okCallback, errorCallback) => {
  try {
    const response = await axios.post(`/auth/login`,{email,password});
    okCallback();
    setToken(response.data.token);
  } catch (e) {
    return errorCallback(e);
  }
};

export const Register = async (name,surname,phoneNumber,email,password, okCallback, errorCallback) => {
  try {
    const response = await axios.post(`/auth/registration`,{name,surname,phoneNumber,email,password});
    okCallback();
    setToken(response.data.token);
  } catch (e) {
    return errorCallback(e);
  }
};

function setToken(token){
  axios.defaults.headers.common["Token"] =token;
  localStorage.setItem("Token", token);
};


