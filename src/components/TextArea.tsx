import React from "react";
import clsx from "clsx";

interface TextAreaProps {
  disabled?: boolean;
  label: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  width?: "1/2" | "2/3" | "full";
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
  const requiredClasses = props.required ? "text-red-600" : "";
  const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthClasses =
    props.width === "full"
      ? "w-full"
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
      <textarea
        className={clsx (
          props.classes,
          !props.disabled && "focus:border-black hover:border-black font-semibold w-full",
          "border-2  bg-white focus:outline-0 transition-colors border-gray-300 px-4 py-4 text-[#333333] lining-nums",
          disabledClasses
        )}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        disabled={props.disabled}
      ></textarea>
    </div>
  );
}