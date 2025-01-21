import { IGameQuery } from "@/App";
import useFetchGenres from "@/hooks/useFetchGenres";
import useFetchPlatforms from "@/hooks/useFetchPlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: IGameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useFetchGenres();
  const { data: platforms } = useFetchPlatforms();

  const genre = genres?.results.find(g => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

  let heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <>
      <Heading as="h1" marginBottom={5} fontSize="5xl">{heading}</Heading>
    </>
  )
}

export default GameHeading;