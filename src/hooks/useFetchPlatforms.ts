// import useFetchData from "./useFetchData";
import apiClient from "@/services/api-client";
import { IFetchResponse } from "./useFetchData";
import { useQuery } from "@tanstack/react-query";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

// export default function useFetchPlatforms () {
//   return useFetchData<IPlatform>("platforms/lists/parents");
// }

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