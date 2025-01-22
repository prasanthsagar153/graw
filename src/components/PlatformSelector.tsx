import useFetchPlatforms from "@/hooks/useFetchPlatforms";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function  PlatformSelector() {
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const { data, error } = useFetchPlatforms();
  const platforms = data?.results;
  const selectedPlatform = usePlatform(platformId);

  if(error) return null;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { selectedPlatform?.name || 'Platforms' }
        </MenuButton>
        <MenuList>
          {
            platforms && platforms.map(p => {
              return (
                <MenuItem key={p.id} onClick={() => setPlatformId(p.id)}>{p.name}</MenuItem>
              )
            })
          }
        </MenuList>
      </Menu>
    </>
  )
}

export default PlatformSelector;