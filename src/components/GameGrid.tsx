import useFetchGames from "@/hooks/useFetchGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from "./GameCardContainer";
import { IGameQuery } from "@/App";

interface Props {
  gameQuery: IGameQuery
}

function GameGrid({ gameQuery }: Props) {
  // const { games, error, loading } = useFetchGames(gameQuery.genre, gameQuery.platform);
  const { games, error, loading } = useFetchGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      { error && <Text>{error}</Text> }

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={10} paddingLeft={0}>
        {
          loading && skeletons.map(s => {
            return (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            )
          })
        }
        {
          games && games.map(game => {
            return (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            )
          })
        }
      </SimpleGrid>
    </>
  )
}

export default GameGrid;