import APIClient, { IFetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IPlatform } from "./useFetchPlatforms";
import useGameQueryStore, { IGameQuery } from "@/store";

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
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }
};

const useFetchGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
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
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useFetchGames;