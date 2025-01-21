import useFetchPlatforms, { IPlatform } from "@/hooks/useFetchPlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: IPlatform) => void;
}

function  PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
  const { data, error } = useFetchPlatforms();
  const platforms = data?.results;
  const selectedPlatform = platforms?.find(p => p.id === selectedPlatformId);

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
                <MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>{p.name}</MenuItem>
              )
            })
          }
        </MenuList>
      </Menu>
    </>
  )
}

export default PlatformSelector;