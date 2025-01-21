import apiClient, { IFetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

async function fetchPlatforms(): Promise<IFetchResponse<IPlatform>> {
  return (await apiClient.get<IFetchResponse<IPlatform>>("/platforms/lists/parents")).data;
}

const useFetchPlatforms = () => {
  return useQuery<{results: IPlatform[]}, Error>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000
  });
}

export default useFetchPlatforms; 