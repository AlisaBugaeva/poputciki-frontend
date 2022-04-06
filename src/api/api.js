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
    const response = await axios.get(`/trips/latest?limit=6&page=0`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const getUserTrips = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/trips/my`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const makeNewTrip = async (start, finish, startDate, finishDate, okCallback, errorCallback) => {
  try {
    await axios.post(`/trips/new`, {start, finish, startDate, finishDate});
    okCallback();
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

export const deleteTheTrip = async (id,okCallback, errorCallback) => {
  try {
    await axios.delete(`/trips/${id}/delete`);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const joinTheTrip = async (id,okCallback, errorCallback) => {
  try {
    await axios.post(`/trips/${id}/join`);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const findPoputchiki = async (id,okCallback, errorCallback) => {
  try {
    const response =await axios.get(`/poputchiki/${id}/view`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const acceptRequest = async (idPoputchik, idTravel,okCallback, errorCallback) => {
  try {
    await axios.post(`/poputchiki/${idPoputchik}/${idTravel}/accept`);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const rejectRequest = async (idPoputchik, idTravel,okCallback, errorCallback) => {
  try {
    await axios.post(`/poputchiki/${idPoputchik}/${idTravel}/reject`);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const getUserRequests = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/poputchiki/requests`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const getAcceptedRequests = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/poputchiki/acceptedRequests`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const viewMessages = async (idPoputchik, okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/message/${idPoputchik}/view`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const countUnreadMessages = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/message/unread`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const readMessages = async (idPoputchik, okCallback, errorCallback) => {
  try {
    await axios.post(`/message/${idPoputchik}/read`);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const viewDialogs = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/message/dialogs`);
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

export const register = async (name,surname,phoneNumber,email,password, okCallback, errorCallback) => {
  try {
    const response = await axios.post(`/auth/registration`,{name,surname,phoneNumber,email,password});
    okCallback();
    setToken(response.data.token);
  } catch (e) {
    return errorCallback(e);
  }
};

export const getUser = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/user/info`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

export const editUser = async (name,surname,phoneNumber, okCallback, errorCallback) => {
  try {
    const response = await axios.patch(`/user/edit`,{name,surname,phoneNumber});
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};


export const logout = async (okCallback, errorCallback) => {
  try {
    await axios.post(`/auth/logout`);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

function setToken(token){
  axios.defaults.headers.common["Token"] =token;
  localStorage.setItem("Token", token);
};


