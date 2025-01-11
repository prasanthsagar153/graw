import useFetchData from "./useFetchData";
import { IGenre } from "./useFetchGenres";
import { IPlatform } from "./useFetchPlatforms";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

export default function useFetchGames(selectedGenre: IGenre | null, selectedPlatform: IPlatform | null) {
  const { data: games, error, loading } = useFetchData<IGame>("/games", {
    params: {
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id
    },
  }, [selectedGenre?.id, selectedPlatform?.id]);
  return { games, error, loading };
};