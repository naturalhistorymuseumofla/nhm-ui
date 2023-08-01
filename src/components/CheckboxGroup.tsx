import React from "react";

interface CheckboxGroupProps {
  title: string;
  children: React.ReactNode[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-2" onChange={props.onChange}>
      <div className="font-bold">{props.title}</div>
      {props.children}
    </div>
  );
}