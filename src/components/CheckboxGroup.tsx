import React from 'react';

interface CheckboxGroupProps {
  title: string;
  children: React.ReactNode[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ ...props }) => {
  return (
    <div
      id={props.title}
      aria-labelledby={props.title}
      className="flex flex-col gap-2"
      onChange={props.onChange}
      role="group"
    >
      <div className="font-bold">{props.title}</div>
      {props.children}
    </div>
  );
};
