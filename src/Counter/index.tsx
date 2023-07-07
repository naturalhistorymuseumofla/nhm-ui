import React, { useEffect, useState } from 'react';
import { CounterProps } from './Counter.types';
import clsx from 'clsx';
import CounterButton from './CounterButton';

/**
 * UI component for increasing and decreasing a number (quantity selector) — used primarily for ticketing shopping cart.
 */

export const Counter: React.FC<CounterProps> = ({ ...props }) => {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    props.setTotal && props.setTotal(props.price);
    setCount(count + 1)
  };
  const decrease = () => {
    props.setTotal && props.setTotal(0 - props.price);
    setCount(count > 0 ? count - 1 : 0)
  };

  const increaseButton = <CounterButton variant="inc" onClick={increase} />;
  const decreaseButton = <CounterButton variant="dec" onClick={decrease} />;

  return (
    <div className="flex gap-2">
      {props.direction === 'left' ? decreaseButton : increaseButton}
      <div
        className={clsx(
          'w-12 text-center py-3 border-black border-2 lining-nums'
        )}
      >
        {count}
      </div>
      {props.direction === 'left' ? increaseButton : decreaseButton}
    </div>
  );
};
