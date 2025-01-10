import useFetchData from "./useFetchData";

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

export default function useFetchGames() {
  const { data: games, error, loading } = useFetchData<IGame>("/games");
  return { games, error, loading };
}