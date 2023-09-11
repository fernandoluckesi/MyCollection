import { useEffect, useState } from "react";
import { getAllGames, getGameById } from "../services/api";

export interface GameType {
  id: number;
  name: string;
  description: string;
  type: string;
  routeType: string;
  price: number;
  imageurl: string;
  marketType: string;
}

export const useGames = (id: number | null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<GameType[]>();
  const [singleGame, setSingleGame] = useState<GameType>();

  useEffect(() => {
    if (id || id === 0) {
      getGameById(id)
        .then((game) => {
          console.log("tem id");
          setSingleGame(game);
          setIsLoading(false);
        })
        .catch(() => null);
    } else {
      console.log("nao tem id");

      getAllGames()
        .then((games) => {
          setGames(games);
          setIsLoading(false);
        })
        .catch(() => null);
    }
  }, [id]);

  return {
    isLoading,
    games,
    singleGame,
  };
};
