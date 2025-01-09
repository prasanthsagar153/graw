import useFetchGames from "@/hooks/useFetchGames";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const { games, error } = useFetchGames();

  return (
    <>
      { error && <Text>{error}</Text> }
      <ul>
        {
          games &&  games.map(game => <li key={game.id}>{game.name}</li>)
        }
      </ul>
    </>
  )
}

export default GameGrid;