import React from "react";
import clsx from "clsx";
import { useState } from "react";

interface SelectorProps {
  type: 'checkbox' | 'radio';
  label: string;
  name?: string;
  classes?: string;
  role?: 'radio' | 'checkbox';
}

export const Selector: React.FC<SelectorProps> = ({ ...props }) => {
  const [checked, setChecked] = useState(false);
  const beforeStyles = clsx(
    'before:w-5 before:h-5 before:scale-50 before:transform-opacity', 
    'before:opacity-0 before:checked:opacity-100 before:transition-transform', 
    'before:checked:scale-100 before:bg-black'
  );

  return(
    <div className="flex items-center gap-2">
    <input
      type={props.type}
      value={props.label}
      name={props.name}
      tabIndex={0}
      onChange={() => setChecked(!checked)}
      aria-checked={checked}
      role={props.role}
      className={clsx(
        `w-8 h-8 text-black border-2 border-gray-300 checked:border-black`, 
         `flex items-center justify-center hover:border-black transition-colors`,
        beforeStyles,
        props.classes
      )}
    />
    <label aria-label={props.label} className="font-semibold">{props.label}</label>
  </div>
);

}