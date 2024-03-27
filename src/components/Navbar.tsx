import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"/>
      Navbar
    </HStack>
  );
}

export default Navbar;
