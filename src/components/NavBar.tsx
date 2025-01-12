import { HStack } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchedValue: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <>
      <HStack padding="20px">
        <span className="logo">GRAW</span>
        <SearchInput onSearch={onSearch} />
        <DarkModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar;