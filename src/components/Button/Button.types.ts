import { MouseEventHandler } from "react";

export interface ButtonProps {
  children?: string;
  variant?: "nhm" | "lbtp" | "default";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}