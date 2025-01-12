import { HStack } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <>
      <HStack padding="20px">
        <span className="logo">GRAW</span>
        <SearchInput />
        <DarkModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar;