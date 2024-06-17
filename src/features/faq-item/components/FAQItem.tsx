import { Flex, Heading, DataList, Text } from "@radix-ui/themes";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  items: FAQItem[];
};

export const FAQItem = ({ title, items }: FAQSectionProps) => (
  <Flex direction="column" gap="3" maxWidth="480px">
    <Heading mb="2">{title}</Heading>
    <DataList.Root>
      {items.map((faq, index) => (
        <DataList.Item key={index}>
          <DataList.Value>
            <Flex direction="column" gap="2">
              <Heading as="h3" size="3">
                {faq.question}
              </Heading>
              <Text size="3">{faq.answer}</Text>
            </Flex>
          </DataList.Value>
        </DataList.Item>
      ))}
    </DataList.Root>
  </Flex>
);
