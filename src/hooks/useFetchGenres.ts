import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = new APIClient<IGenre>("/genres").getAll;

const useFetchGenres = () => {
  return useQuery<{ results: IGenre[] }, Error>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export default useFetchGenres;