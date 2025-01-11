import useFetchData from "./useFetchData";
import { IGenre } from "./useFetchGenres";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

export default function useFetchGames(selectedGenre: IGenre | null) {
  const { data: games, error, loading } = useFetchData<IGame>("/games", { params: { genres: selectedGenre?.id }}, [selectedGenre?.id]);
  return { games, error, loading };
}