import { IGameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import usePlatform from "@/hooks/usePlatform";
import useGenre from "@/hooks/useGenre";

interface Props {
  gameQuery: IGameQuery;
}

function GameHeading({ gameQuery }: Props) {

  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  let heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <>
      <Heading as="h1" marginBottom={5} fontSize="5xl">{heading}</Heading>
    </>
  )
}

export default GameHeading;