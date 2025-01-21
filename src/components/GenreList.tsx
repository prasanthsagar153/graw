import useFetchGenres, { IGenre } from "@/hooks/useFetchGenres";
import { getCroppedImageUrl } from "@/services/utils";
import { HStack, List, ListItem, Image, Spinner, Button, Heading } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: IGenre) => void;
  // selectedGenre: IGenre | null;
  selectedGenreId?: number;
}

function GenreList({ onSelectGenre, selectedGenreId }: Props) {
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
                    onClick={() => onSelectGenre(g)}
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