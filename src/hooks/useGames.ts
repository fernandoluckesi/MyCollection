import { useEffect, useState } from "react";
import { getAllGames } from "../services/api";

export interface GameType {
  id: number;
  name: string;
  description: string;
  type: string;
  routeType: string;
  price: number;
  imageurl: string;
}

export const useGames = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [highlights, setHighlights] = useState<GameType[]>();
  const [bestSellers, setBestSellers] = useState<GameType[]>();

  useEffect(() => {
    getAllGames()
      .then((games) => {
        console.log({ isLoading, highlights, bestSellers });
        setHighlights(games.highlights);
        setBestSellers(games.bestSellers);
        setIsLoading(false);
      })
      .catch(() => null);
  }, []);

  return {
    isLoading,
    highlights,
    bestSellers,
  };
};
