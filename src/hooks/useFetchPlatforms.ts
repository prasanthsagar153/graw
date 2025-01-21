import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const fetchPlatforms = new APIClient<IPlatform>("/platforms/lists/parents").getAll;

const useFetchPlatforms = () => {
  return useQuery<{results: IPlatform[]}, Error>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000
  });
}

export default useFetchPlatforms; 