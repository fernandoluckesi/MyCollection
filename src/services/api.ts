import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUser = async (email: string, password: string) => {
  try {
    const reponse = await api.get(`/users?email=${email}&password=${password}`);
    const user = reponse.data[0];
    return user;
  } catch (error) {
    throw error;
  }
};
