import { MouseEventHandler } from "react";

export interface CounterProps {
  direction: "left" | "right";
  setTotal?: Function;
  price: number;
}