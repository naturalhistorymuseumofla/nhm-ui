import React from "react";
import clsx from "clsx";
import { Selector } from "./Selector";

interface CheckboxProps {
  label: string;
  name?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {

  const classes = clsx(
    `rounded-none bg-white before:text-2xl before:items-center checked:bg-black 
    before:justify-center checked:bg-black before:text-white before:flex`,
  )

  return (
    <Selector
      type="checkbox"
      label={props.label}
      role="checkbox"
      name={props.name}
      classes={classes}
    />
  );
}