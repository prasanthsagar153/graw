import { IGameQuery } from "@/App";
import APIClient, { IFetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IPlatform } from "./useFetchPlatforms";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
  page?: number;
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
  
  const fetchGames = (pageParam: number) =>
    new APIClient<IGame>("/games").getAll({
      ...gameConfiguration,
      params: {...gameConfiguration.params, page: pageParam}
    }
  );
  
  return useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => fetchGames(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  });
};

export default useFetchGames;