import { ReactNode } from "react";

export type DataListItem = {
  icon: ReactNode;
  text: ReactNode;
};

export type InformationSectionProps = {
  title: string;
  items: DataListItem[];
  id?: string;
};
