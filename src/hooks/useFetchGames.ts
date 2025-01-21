import { IGameQuery } from "@/App";
import apiClient, { IFetchResponse } from "@/services/api-client";
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

async function fetchGames(gameQuery: IGameQuery): Promise<IFetchResponse<IGame>> {
  return (await apiClient.get<IFetchResponse<IGame>>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    },
  })).data;
}

const useFetchGames = (gameQuery: IGameQuery) => {
  return useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => fetchGames(gameQuery),
    
  });
};

export default useFetchGames;