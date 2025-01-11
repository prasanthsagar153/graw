import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
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
                <MenuItem key={o.value} value={o.value} onClick={() => onSelectSortOrder(o.value)}>{ o.label }</MenuItem>
              )
            })
          }
        </MenuList>
      </Menu>
    </>
  )
}

export default SortSelector;