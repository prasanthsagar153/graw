import { IGame } from "@/hooks/useFetchGames"
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"

interface Props {
  game: IGame
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard