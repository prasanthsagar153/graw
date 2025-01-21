import { IGameQuery } from "@/App";
import APIClient, { IFetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { IPlatform } from "./useFetchPlatforms";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}

const createGameConfiguration = (gameQuery: IGameQuery) => {
  return {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }
};

const useFetchGames = (gameQuery: IGameQuery) => {
  const gameConfiguration = createGameConfiguration(gameQuery);
  const fetchGames = new APIClient<IGame>("/games").getAll(gameConfiguration);
  
  return useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => fetchGames,
  });
};

export default useFetchGames;