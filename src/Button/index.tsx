import React from "react";
import { ButtonProps } from "./Button.types";
import clsx from "clsx";
import "../tailwind.css";

/**
 * Primary UI component for user interaction
 */

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
        "outline-2 outline px-6 py-3 transition-colors font-bold w-fit",
        variantClasses,
        disabledClasses,
        props.classes
      )}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};