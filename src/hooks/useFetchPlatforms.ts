import useFetchData from "./useFetchData";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export default function useFetchPlatforms () {
  return useFetchData<IPlatform>("platforms/lists/parents");
}