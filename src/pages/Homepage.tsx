import GameGrid from "@/components/GameGrid"
import GameHeading from "@/components/GameHeading"
import GenreList from "@/components/GenreList"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"
import { Grid, Show, GridItem, HStack } from "@chakra-ui/react"

function Homepage() {
  return (
    <>
      <Grid 
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '240px 1fr'
        }}>
        <Show above="lg">
          <GridItem area='aside' paddingX={2}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main' padding={10}>
          <GameHeading />
          <HStack spacing={5}> 
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default Homepage;