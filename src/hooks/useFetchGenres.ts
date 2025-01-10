import useFetchData from "./useFetchData";

export interface IGenre {
  id: number;
  name: string;
}

export default function useFetchGenres () {
  return useFetchData<IGenre>("/genres");
};