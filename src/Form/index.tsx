import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '../Button';

interface FormProps {
  children: React.ReactNode[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  action?: string;
  method?: string;
}

export const Form: React.FC<FormProps> = ({ ...props }) => {
  const [formData, setFormData] = useState({});

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return false;
  }

  return (
    <form
      className={clsx(
        'flex flex-col gap-6 w-full',
      )}
      onSubmit={props.onSubmit ? props.onSubmit : onSubmit}
      action={props.action}
      method={props.method}
    >
      {React.Children.map(props.children, (child: any, i: number) => {
        return React.cloneElement(child, {
          ...child.props,
          i,
          onChange: onChange,
        });
      })}
      <Button classes='mt-4'>
        <input type="submit" className="w-fit"/>
      </Button>

    </form>
  );
};
