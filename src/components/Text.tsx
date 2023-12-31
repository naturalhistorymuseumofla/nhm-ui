import React from "react";
import clsx from "clsx";

export interface TextProps {
  children?: string;
  classes?: string;
 }

const H1: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <h1 className={clsx("text-7xl font-black mb-4", props.classes)}>{children}</h1>
  )
}

const H2: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <h2 className={clsx("text-5xl font-black mb-2", props.classes)}>{children}</h2>
  );
}

const H3: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <h3 className={clsx("text-2xl font-bold mb-1", props.classes)}>{children}</h3>
  );
}

const H4: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <h4 className={clsx("text-lg uppercase mb-1", props.classes)}>{children}</h4>
  );
}

const Paragraph: React.FC<TextProps> = ({ children, ...props }) => {
  return(
    <p className={clsx(props.classes)}>
      {children}
    </p>
  )
}

export { H1, H2, H3, H4, Paragraph };