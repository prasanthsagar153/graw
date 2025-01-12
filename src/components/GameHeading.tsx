import { IGameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: IGameQuery;
}

function GameHeading({ gameQuery }: Props) {
  let heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <>
      <Heading as="h1" marginBottom={5} fontSize="5xl">{heading}</Heading>
    </>
  )
}

export default GameHeading;