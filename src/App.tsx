import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { IGenre } from "./hooks/useFetchGenres";
import PlatformSelector from "./components/PlatformSelector";
import { IPlatform } from "./hooks/useFetchPlatforms";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area='aside' paddingX={2}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
          </GridItem>
        </Show>
        <GridItem area='main' padding={10}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
};

export default App;