import { Flex, Heading, DataList } from "@radix-ui/themes";
import { IconTextItem } from "../../icon-text-item/components/IconTextItem";
import { InformationSectionProps } from "../types";

export const InformationSection = ({
  title,
  items,
  id,
}: InformationSectionProps) => (
  <Flex direction="column" gap="4" maxWidth="480px">
    <Heading id={id} mb="2">
      {title}
    </Heading>
    <DataList.Root>
      {items.map((item, index) => (
        <IconTextItem key={index} icon={item.icon} text={item.text} />
      ))}
    </DataList.Root>
  </Flex>
);
