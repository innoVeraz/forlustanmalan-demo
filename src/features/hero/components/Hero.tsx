import {
  Container,
  Section,
  Flex,
  Heading,
  Text,
  Button,
  Link,
} from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import NextLink from "next/link";

export const Hero = () => (
  <Section py={{ sm: "160px" }} className="bg-hero-pattern bg-cover text-white">
    <Container size="4" px="3">
      <Flex maxWidth="560px" direction="column" gap="4">
        <Heading size={{ initial: "8", sm: "9" }}>
          Spärra körkort eller annan ID-handling
        </Heading>
        <Text size="3">
          Minska risken för bedrägerier med tjänsten Förlustanmälan. <br />
          Anmäl ditt borttappade körkort eller ID-kort.
        </Text>
        <Flex gap="4">
          <Button asChild>
            <Link color="amber" href="#report-loss">
              <Text size="3">Anmäl förlust</Text>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              style={{ boxShadow: "inset 0 0 0 1px white", color: "white" }}
              asChild
            >
              <NextLink scroll href="#how-does-it-work">
                <InfoCircledIcon />
                <Text size="3">Så funkar det</Text>
              </NextLink>
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Container>
  </Section>
);
