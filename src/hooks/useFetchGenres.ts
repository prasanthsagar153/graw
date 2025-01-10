import useFetchData from "./useFetchData";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

export default function useFetchGenres () {
  return useFetchData<IGenre>("/genres");
};