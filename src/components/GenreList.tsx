import useFetchGenres from "@/hooks/useFetchGenres";
import { getCroppedImageUrl } from "@/services/utils";
import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";

function GenreList() {
  const { data: genres, loading, error } = useFetchGenres();
  if(loading) return <Spinner />
  if(error) return null;
  return (
    <>
      <List>
        {
          genres.map(g => {
            return (
              <ListItem key={g.id} paddingY="5px">
                <HStack>
                  <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(g.image_background)} />
                  <Button fontSize="lg" variant="link">{g.name}</Button>
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