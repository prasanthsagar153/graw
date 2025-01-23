import { HStack } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <HStack padding="20px">
        <Link to="./">
          <span className="logo">GRAW</span>
        </Link>
        <SearchInput />
        <DarkModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar;