import React from 'react';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

interface CounterButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant: 'inc' | 'dec';
}

const CounterButton: React.FC<CounterButtonProps> = ({ ...props }) => {
  return (
    <button
      onClick={props.onClick}
      role="button"
      aria-label={props.variant === 'inc' ? 'increase' : 'decrease'}
      className={clsx(
        'hover:bg-gray-800 hover:text-white active:bg-black bg-gray-200 w-8 transition-colors'
      )}
    >
      {props.variant === 'inc' ? '+' : '-'}
    </button>
  );
};

export default CounterButton;
