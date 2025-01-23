import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface IScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const fetchScreenshots = (gameId: number) => new APIClient<IScreenshot>(`/games/${gameId}/screenshots`).getAll;

const useFetchScreenshots = (gameId: number) => {
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: fetchScreenshots(gameId),
    staleTime: 24 * 60 * 60 * 1000
  });
}

export default useFetchScreenshots;