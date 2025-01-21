import useFetchPlatforms from "./useFetchPlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = useFetchPlatforms();
  return platforms?.results.find(p => p.id === id);
}

export default usePlatform;