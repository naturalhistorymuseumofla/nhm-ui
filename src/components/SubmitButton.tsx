import React from 'react';
import { Button, ButtonProps } from './Button';

interface SubmitButtonProps extends ButtonProps {
  value?: string;
  form?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  value = 'Submit',
  ...props
}) => {
  return (
    <Button
      variant={props.variant}
      disabled={props.disabled}
      classes={props.classes}
      onClick={props.onClick}
    >
      <input type="submit" className="w-fit" form={props.form}></input>
    </Button>
  );
};
