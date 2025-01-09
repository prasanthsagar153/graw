import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IPlatform } from "@/hooks/useFetchGames";
import { IconType } from "react-icons";

interface Props {
  platforms: IPlatform[]
}

const iconLookup: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe
}

function PlatformIconList({ platforms }: Props) {
  return (
    <HStack marginY={1}>
      { platforms.map((platform) => <Icon as={iconLookup[platform.slug]}  key={platform.id} color="gray.500" />)}
    </HStack>
  )
}

export default PlatformIconList;