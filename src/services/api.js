import axios from "axios";

const API_URL = "https://indeed-clone-server.onrender.com";
export const savePost = async (payload) => {
  try {
    return await axios.post(`${API_URL}/post`, payload);
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export const getAllPost = async () => {
  try {
    return await axios.get(`${API_URL}/posts`);
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};
