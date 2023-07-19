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
      ? "w-1/3"
      : props.width === "1/2"
      ? "w-1/2"
      : props.width === "2/3"
      ? "w-2/3"
      : "w-full";

  return (
    <div className="flex flex-col w-full gap-1">
      <label
        className={clsx("font-bold text-sm", requiredClasses, disabledClasses)}
        htmlFor={props.id}
      >
        {props.label + (props.required ? " *" : "")}
      </label>
      <input
        type={props.type}
        id={props.id}
        required={props.required}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={clsx(
          props.classes,
          !props.disabled && "focus:border-black hover:border-black font-semibold",
          "border-2 focus:outline-0 transition-colors border-gray-300 px-4 py-4 text-[#333333] lining-nums",
          disabledClasses,
          widthClasses
        )}
      />
    </div>
  );
};

