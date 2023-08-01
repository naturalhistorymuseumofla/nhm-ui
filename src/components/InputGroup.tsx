import React from "react";
import clsx from "clsx";
import { classes } from "istanbul-lib-coverage";

interface InputGroupProps {
  children: React.ReactNode[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({ ...props }) => {
  return (
    <div
      className={clsx(
        "flex flex-row flex-wrap gap-4",
        "w-full",
        classes
      )}
      onChange={props.onChange}
    >
      {React.Children.map(props.children, (child: any, i: number) => {
        return React.cloneElement(child, {
          ...child.props,
          i,
          onChange: props.onChange,
        });
      })}
    </div>
  );
}

