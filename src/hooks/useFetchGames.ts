import { IGameQuery } from "@/App";
import useFetchData from "./useFetchData";
import { IPlatform } from "./useFetchPlatforms";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}

export default function useFetchGames(gameQuery: IGameQuery) {
  const { data: games, error, loading } = useFetchData<IGame>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    },
  }, [gameQuery]);
  // }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery?.sortOrder]);
  return { games, error, loading };
};