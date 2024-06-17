import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { getMenu } from "../api";
import { HelpLinkPill } from "../HelpLinkPill";
import { Hamburger } from "./Hamburger";

const Header = async () => {
  const menu = await getMenu();
  return (
    <header className="sticky top-0 z-50 py-3 bg-neutral-dark text-white text-sm">
      <Container px="3">
        <Flex
          justify={{ initial: "between", sm: "start" }}
          align="center"
          gap="8"
        >
          <Image
            width={90}
            height={90}
            src="https://www1.minuc.se/dist/compiled/fonts/7da0495dbb45ae895e64.svg"
            alt="brand logotype"
          />
          <Flex display={{ initial: "none", sm: "flex" }} gap="8">
            <Text weight="bold">Produkter & tjänster</Text>
            <Text weight="bold">Artiklar & kunskap</Text>
          </Flex>
          <Box display={{ initial: "none", sm: "block" }} ml="auto">
            <HelpLinkPill />
          </Box>
          <Box display={{ initial: "block", sm: "none" }}>
            <Hamburger />
          </Box>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
