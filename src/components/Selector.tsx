import React from "react";
import clsx from "clsx";

interface SelectorProps {
  type: 'checkbox' | 'radio';
  label: string;
  name?: string;
  classes?: string;
}

export const Selector: React.FC<SelectorProps> = ({ ...props }) => {
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
      className={clsx(
        `w-8 h-8 text-black border-2 border-gray-300 checked:border-black 
         flex items-center justify-center hover:border-black transition-colors`,
        beforeStyles,
        props.classes
      )}
    />
    <label className="font-semibold">{props.label}</label>
  </div>
);

}