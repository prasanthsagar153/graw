import { HStack } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";

function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between" padding="20px">
        <span className="logo">GRAW</span>
        <DarkModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar;