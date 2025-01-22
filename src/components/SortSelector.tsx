import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const currentOrder = sortOrders.find(o => o.value === sortOrder);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: { currentOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {
            sortOrders.map(o => {
              return (
                <MenuItem key={o.value} value={o.value} onClick={() => setSortOrder(o.value)}>{ o.label }</MenuItem>
              )
            })
          }
        </MenuList>
      </Menu>
    </>
  )
}

export default SortSelector;