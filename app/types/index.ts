import type { ReactNode } from "react";

export interface LinkType {
  name: string;
  url: string;
  icon?: ReactNode;
  category: string;
  color: string;
  featured?: boolean;
}

export interface CategoryType {
  id: string;
  name: string;
}
