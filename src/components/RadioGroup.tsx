import React from 'react';

interface RadioGroupProps {
  title: string;
  children: React.ReactNode[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ ...props }) => {
  return (
    <div
      className="flex flex-col gap-2"
      onChange={props.onChange}
      role="radiogroup"
      id={props.title}
      aria-labelledby={props.title}
    >
      <div className="font-bold">{props.title}</div>
      {props.children}
    </div>
  );
};
