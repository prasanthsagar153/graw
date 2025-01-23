import APIClient from "@/services/api-client";
import { IGame } from "./useFetchGames";
import { useQuery } from "@tanstack/react-query";

const fetchGame = (slug: string) => new APIClient<IGame>("/games").get(slug);

const useFetchGame = (slug: string) => {
  return useQuery<IGame>({
    queryKey: ["game", slug],
    queryFn: () => fetchGame(slug),
    staleTime: 24 * 60 * 60 * 1000
  });
};

export default useFetchGame;