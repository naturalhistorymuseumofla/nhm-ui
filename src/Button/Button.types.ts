import { MouseEventHandler } from "react";

export interface ButtonProps {
  children?: string | React.ReactNode;
  variant?: "nhm" | "lbtp" | "default";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}