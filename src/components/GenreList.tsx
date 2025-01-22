import useFetchGenres, { IGenre } from "@/hooks/useFetchGenres";
import { getCroppedImageUrl } from "@/services/utils";
import useGameQueryStore from "@/store";
import { HStack, List, ListItem, Image, Spinner, Button, Heading } from "@chakra-ui/react";

function GenreList() {
  const setGenreId = useGameQueryStore(s => s.setGenreId);
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const { data, isLoading, error } = useFetchGenres();

  if(isLoading) return <Spinner />
  if(error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        {
          data?.results && data?.results.map((g: IGenre) => {
            return (
              <ListItem key={g.id} paddingY="5px">
                <HStack>
                  <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(g.image_background)} />
                  <Button
                    whiteSpace="normal"
                    textAlign="left"
                    fontSize="lg"
                    variant="link"
                    onClick={() => setGenreId(g.id)}
                    fontWeight={g.id === selectedGenreId ? "bold" : "normal"}
                  >
                      {g.name}
                  </Button>
                </HStack>
              </ListItem>
            )
          })
        }
      </List>
    </>
  ) 
}

export default GenreList;