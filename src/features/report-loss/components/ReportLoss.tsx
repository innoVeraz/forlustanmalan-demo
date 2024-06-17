import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Link,
} from "@radix-ui/themes";

export const ReportLoss = () => (
  <Section style={{ background: "var(--orange-3)", color: "neutral-dark" }}>
    <Container size="4" px="3">
      <Flex
        gap={{ initial: "8", xs: "4" }}
        justify="between"
        wrap={{ initial: "wrap", xs: "nowrap" }}
      >
        <Flex direction="column" gap="3" width="480px" flexShrink="1">
          <Heading id="report-loss">Anmäl förlust</Heading>
          <Text>
            Ring vår automatiska telefontjänst, dygnet runt. Samtalet kostar 95
            kr. Tjänsten fungerar inte med kontantkort.
          </Text>
          <Box>
            <Flex direction="column">
              <Link href="tel:+4609001012032">
                <Text style={{ color: "black" }} size="5" weight="bold">
                  0900 101 20 30
                </Text>
              </Link>
              <Link href="tel:+4609001012032">
                <Text style={{ color: "black" }} size="1">
                  +46 900 101 20 30 (om du ringer från utlandet)
                </Text>
              </Link>
            </Flex>
          </Box>
          <Text size="2">
            När vi registrerat förlustanmälan i din kreditupplysning gör
            kreditgivare en extra kontroll. Då kan de vara säkra på att det är
            du, och ingen annan, som ansöker om en kredit. Och du kan vara säker
            på att ingen okänd kan använda din ID-handling utan risk att
            kontrolleras.
          </Text>
        </Flex>

        <Flex direction="column" gap="3" width="480px" flexShrink="1">
          <Heading>
            <Flex align="start" gap="2">
              Redan utsatt för bedrägeri?
            </Flex>
          </Heading>
          <Text>
            Är du redan utsatt för ett bedrägeri kan det vara en god idé att
            helt spärra din kreditupplysning hos UC. Då minskar du risken för
            fortsatta bedrägerier.
          </Text>
          <Box>
            <Button asChild>
              <Link color="amber" href="/bedragerisparr">
                <FontAwesomeIcon className="size-4 text-red-500" icon={faBan} />
                <Text size="3" weight="medium">
                  Beställ bedrägerispärr
                </Text>
              </Link>
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  </Section>
);
