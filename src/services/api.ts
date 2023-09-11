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

export const getUserByToken = async (token: string | undefined) => {
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

export const getAllGames = async () => {
  try {
    const reponse = await api.get(`/games`);
    const games = reponse.data;
    return games;
  } catch (error) {
    throw error;
  }
};

export const getGameById = async (id: number) => {
  try {
    const reponse = await api.get(`/games`, {
      params: {
        id,
      },
    });

    const user = reponse.data[0];
    return user;
  } catch (error) {
    throw error;
  }
};
