import useFetchTrailer from "@/hooks/useFetchTrailer";
import { Box } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data: trailer, isLoading, error } = useFetchTrailer(gameId);
  
  if(isLoading) return null;
  if(error) throw error;

  const data = trailer?.results[0];
  
  return data ? (
    <>
      <Box padding={10}>
        <video
          src={trailer?.results[0]?.data["max"]}
          poster={data.preview}
          controls
        />
      </Box>
    </>
  )
  : null;
}

export default GameTrailer;