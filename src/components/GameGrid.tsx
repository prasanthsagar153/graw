import useFetchGames from "@/hooks/useFetchGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { games, error, loading } = useFetchGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      { error && <Text>{error}</Text> }
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
        {
          loading && skeletons.map(s => {
            return (
              <GameCardContainer>
                <GameCardSkeleton key={s} />
              </GameCardContainer>
            )
          })
        }
        {
          games && games.map(game => {
            return (
              <GameCardContainer>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            )
          })
        }
      </SimpleGrid>
    </>
  )
}

export default GameGrid;