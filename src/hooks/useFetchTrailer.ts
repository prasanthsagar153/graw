import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface ITrailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

const fetchTrailer = (gameId: number) => new APIClient<ITrailer>(`/games/${gameId}/movies`).getAll;

const useFetchTrailer = (gameId: number) => {
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: fetchTrailer(gameId)
  });
}

export default useFetchTrailer;