import { SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DisplayAttribute from "./DisplayAttribute";
import { IGame } from "@/hooks/useFetchGames";

interface Props {
  game: IGame
}

function GameAttributes({ game }: Props) {
  return (
    <>
      <SimpleGrid as="dl" columns={2}>
        <DisplayAttribute attribute="Platforms">
          { game.parent_platforms?.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>) }
        </DisplayAttribute>
        <DisplayAttribute attribute="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </DisplayAttribute>
        <DisplayAttribute attribute="Genres">
          { game.genres.map(g => <Text key={g.id}>{g.name }</Text>) }
        </DisplayAttribute>
        <DisplayAttribute attribute="Publishers">
          { game.publishers.map((publisher) => <Text key={publisher.id}>{publisher.name}</Text>) }
        </DisplayAttribute>
      </SimpleGrid>
    </>
  )
}

export default GameAttributes;