import React from "react";
import { CounterProps } from "./Counter.types";
import clsx from "clsx";
import { useState } from "react";
import CounterButton from "./CounterButton";

const Counter: React.FC<CounterProps> = ({ ...props }) => {
  const [count, setCount] = useState(0);
  const increase = () =>  setCount(count + 1);
  const decrease = () => count > 0 && setCount(count - 1);
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <CounterButton variant="inc" onClick={increase} />
        <div
          className={clsx(
            "w-12 text-center py-3 border-black border-2 lining-nums"
          )}
        >
          {count}
        </div>
        <CounterButton variant="dec" onClick={decrease} />
      </div>
      <p>${props.price * count}</p>
    </div>
  );
};

export default Counter;
