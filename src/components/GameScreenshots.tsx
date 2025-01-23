import useFetchScreenshots from "@/hooks/useFetchScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data: screenshots, isLoading, error } = useFetchScreenshots(gameId);
  
  if(isLoading) return null;
  if(error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {
          screenshots?.results.map(s => <Image key={s.id} src={s.image} />)
        }
      </SimpleGrid>
    </>
  )
}

export default GameScreenshots;