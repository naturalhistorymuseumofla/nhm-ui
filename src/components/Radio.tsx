import React from 'react';
import clsx from 'clsx';
import { Selector } from './Selector';

interface RadioProps {
  label: string;
  name?: string;
}

export const Radio: React.FC<RadioProps> = ({ ...props }) => {
  const classes = clsx(
    `before:rounded-full before:content-[''] rounded-full`
  );
  return (
    <Selector 
      type="radio"
      role="radio"
      label={props.label}
      name={props.name}
      classes={classes}
    />
  );
};
