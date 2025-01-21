import useFetchGenres from "./useFetchGenres";

const useGenre = (id?: number) => {
  const { data: genres} = useFetchGenres();
  return genres?.results.find(g => g.id === id);
}

export default useGenre;