import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const badgeColor = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <>
      <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={badgeColor}>{score}</Badge>
    </>
  )
}

export default CriticScore;