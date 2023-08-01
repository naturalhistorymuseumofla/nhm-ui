import React, { useState, useEffect } from 'react';
import { CounterProps } from './Counter.types';
import clsx from 'clsx';
import CounterButton from './CounterButton';

/**
 * UI component for increasing and decreasing a number (quantity selector) — used primarily for ticketing shopping cart.
 */

export const Counter: React.FC<CounterProps> = ({ ...props }) => {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const handleChange = (event:any) => {
    const value = event.target.value;
    if (value >= 0) {
      setCount(value);
    }
  }

  useEffect(() => {
    props.setTotal && props.setTotal(count);
  }, [count]);

  const increaseButton = <CounterButton variant="inc" onClick={increase} />;
  const decreaseButton = <CounterButton variant="dec" onClick={decrease} />;

  return (
    <div className="flex gap-2">
      {props.direction === 'left' ? decreaseButton : increaseButton}
      <input
        type="number"
        value={count}
        onChange={handleChange}
        className={clsx(
          'w-12 text-center py-3 border-black border-2 lining-nums'
        )}
      >
      </input>
      {props.direction === 'left' ? increaseButton : decreaseButton}
    </div>
  );
};
