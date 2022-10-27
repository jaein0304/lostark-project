import { MouseEvent } from "react";

export interface ILayoutNavUIProps {
  currentMenu: string;
  onClickMenu: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface INavMenuProps {
  isActive: boolean;
}
