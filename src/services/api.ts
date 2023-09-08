import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUser = async (email: string, password: string) => {
  try {
    const reponse = await api.get(`/users`, {
      params: {
        email,
        password,
      },
    });

    const user = reponse.data[0];
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByToken = async (token: string) => {
  try {
    const reponse = await api.get(`/users`, {
      params: {
        token,
      },
    });

    const user = reponse.data[0];
    return user;
  } catch (error) {
    throw error;
  }
};
