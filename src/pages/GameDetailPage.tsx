import ExpandableText from "@/components/ExpandableText";
import useFetchGame from "@/hooks/useFetchGame";
import { Heading, Spinner} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const { slug } = useParams();
  const {data: game, isLoading, error} = useFetchGame(slug!);

  if(isLoading) return <Spinner />;
  if(error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  )
}

export default GameDetailPage; 