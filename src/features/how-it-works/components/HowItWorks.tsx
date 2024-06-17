import { faqItems, howItWorksItems } from "../api";

import { FAQItem } from "@/features/faq-item/components/FAQItem";
import { InformationSection } from "@/features/information-section/components/InformationSection";
import { Section, Container, Flex } from "@radix-ui/themes";

export const HowItWorks = () => (
  <Section id="how-does-it-work">
    <Container size="4" px="3">
      <Flex
        gap={{ initial: "8", xs: "5" }}
        justify="between"
        wrap={{ initial: "wrap", xs: "nowrap" }}
      >
        <InformationSection
          title="Hur funkar Förlustanmälan?"
          items={howItWorksItems}
        />
        <FAQItem title="Vanliga frågor" items={faqItems} />
      </Flex>
    </Container>
  </Section>
);
