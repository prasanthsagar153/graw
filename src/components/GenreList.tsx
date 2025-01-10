import useFetchGenres from "@/hooks/useFetchGenres";

function GenreList() {
  const { data: genres, loading, error } = useFetchGenres();
  return (
    <>
      { JSON.stringify(genres) }
    </>
  )
}

export default GenreList;