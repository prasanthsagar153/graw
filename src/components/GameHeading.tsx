import { IGameQuery } from "@/App";
import useFetchGenres from "@/hooks/useFetchGenres";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: IGameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useFetchGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)
  let heading = `${gameQuery.platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <>
      <Heading as="h1" marginBottom={5} fontSize="5xl">{heading}</Heading>
    </>
  )
}

export default GameHeading;