import React from "react";
import { MouseEventHandler } from "react";
import clsx from "clsx";

/**
 * Primary UI component for user interaction
 */

export interface ButtonProps {
  children?: string | React.ReactNode;
  variant?: "nhm" | "lbtp" | "default" | "destructive";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const variantClasses =
    props.variant === "nhm"
      ? "outline-nhm text-nhm hover:bg-nhm hover:text-white bg-white"
      : props.variant === "lbtp"
      ? "outline-lbtp text-lbtp hover:bg-lbtp hover:text-white bg-white"
      : props.variant === "default"
      ? "outline-black text-black hover:bg-black hover:text-white"
      : props.variant === "destructive" 
      ? "bg-red-600 outline-red-600 hover:outline-red-700 hover:bg-red-700 text-white"
      : "outline-black text-outline-black hover:bg-black hover:text-white";

  const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={clsx(
        "outline-2 outline px-6 py-3 transition-colors font-bold w-fit focus:bg-slate-300",
        variantClasses,
        disabledClasses,
        props.classes
      )}
      onClick={props.onClick}
      tabIndex={0}
      role="button"
      aria-disabled={props.disabled}
    >
      {children}
    </button>
  );
};