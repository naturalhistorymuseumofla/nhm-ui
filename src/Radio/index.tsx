import React from 'react';
import clsx from 'clsx';

interface RadioProps {
  label: string;
  name?: string;
}

export const Radio: React.FC<RadioProps> = ({ ...props }) => {
  const beforeStyles = clsx(
    `before:w-5 before:h-5 before:scale-50 before:rounded-full before:content-[''] 
     before:transform-opacity before:opacity-0 before:checked:opacity-100 
     before:transition-transform before:checked:scale-100 before:bg-black`
  );
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        value={props.label}
        name={props.name}
        className={clsx(
          `w-8 h-8 text-black border-2 border-gray-300 checked:border-black 
          rounded-full grid place-content-center`,
          beforeStyles
        )}
      />
      <label className="font-semibold">{props.label}</label>
    </div>
  );
};
