import { useState } from "react";
import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { IPlatform } from "./hooks/useFetchPlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface IGameQuery {
  genreId?: number;
  platform: IPlatform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <>
      <Grid 
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '240px 1fr'
        }}>
        <GridItem area='nav'>
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText: searchText})} />
        </GridItem>
        <Show above="lg">
          <GridItem area='aside' paddingX={2}>
            <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})} />
          </GridItem>
        </Show>
        <GridItem area='main' padding={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}> 
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
};

export default App;