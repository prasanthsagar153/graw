import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { IFetchResponse } from "./useFetchData";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

// export default function useFetchGenres () {
//   return useFetchData<IGenre>("/genres");
// };

async function fetchGenres(): Promise<IFetchResponse<IGenre>> {
  return (await apiClient.get<IFetchResponse<IGenre>>("/genres")).data;
}

const useFetchGenres = () => {
  return useQuery<{ results: IGenre[] }, Error>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export default useFetchGenres;