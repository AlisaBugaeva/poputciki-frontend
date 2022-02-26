import axios from "axios";
import "./axios";

// Requests Auth


// Requests Users
export const getTop5Places = async (okCallback, errorCallback) => {
  try {
    const response = await axios.get(`/places`);
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};
