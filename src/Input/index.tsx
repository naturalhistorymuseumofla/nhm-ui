import React from "react";
import { InputProps } from "./Input.types";
import clsx from "clsx";
import "../tailwind.css";

export const Input: React.FC<InputProps> = ({ ...props }) => {
  const requiredClasses = props.required ? "text-red-600" : "";
  const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthClasses =
    props.width === "full"
      ? "w-full"
      : props.width === "1/3"
      ? "w-full sm:basis-[calc(33.3%-.67rem)]"
      : props.width === "1/2"
      ? "w-full sm:basis-[calc(50%-.5rem)]"
      : props.width === "2/3"
      ? "w-full sm:basis-[calc(66.7%-.33rem)]"
      : "w-full";

  return (
    <div className={clsx("flex flex-col gap-1", widthClasses)}>
      <label
        className={clsx("font-bold text-sm", requiredClasses, disabledClasses)}
        htmlFor={props.name}
      >
        {props.label + (props.required ? " *" : "")}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={clsx(
          props.classes,
          !props.disabled && "focus:border-black hover:border-black font-semibold",
          "border-2  bg-white focus:outline-0 transition-colors border-gray-300 px-4 py-4 text-[#333333] lining-nums",
          disabledClasses
        )}
      />
    </div>
  );
};

