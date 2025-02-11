import { IGame } from "@/hooks/useFetchGames"
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import { getCroppedImageUrl } from "@/services/utils"
import { Link } from "react-router-dom"

interface Props {
  game: IGame
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic}/>
          </HStack>
          <Link to={`/games/${game.slug}`}>
            <Heading fontSize="2xl">{game.name}</Heading>
          </Link>
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard;