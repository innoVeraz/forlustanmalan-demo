import { DataList, Text } from "@radix-ui/themes";
import { IconTextItemProps } from "../types";

export const IconTextItem = ({ icon, text }: IconTextItemProps) => (
  <DataList.Item>
    <DataList.Label minWidth="10px">{icon}</DataList.Label>
    <DataList.Value>
      <Text size="3">{text}</Text>
    </DataList.Value>
  </DataList.Item>
);
