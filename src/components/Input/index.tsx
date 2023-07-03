import React from "react";
import { InputProps } from "./Input.types";
import clsx from "clsx";

const Input: React.FC<InputProps> = ({ ...props }) => {
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
    <div className="w-full flex flex-col gap-1">
      <label
        className={clsx("text-bold", requiredClasses, disabledClasses)}
        htmlFor={props.id}
      >
        {props.label + (props.required ? " *" : "")}
      </label>
      <input
        type="text"
        id={props.id}
        required={props.required}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={clsx(
          "border-2 border-black px-6 py-3 transition-colors font-bold",
          disabledClasses,
          widthClasses
        )}
      />
    </div>
  );
};

export default Input;
