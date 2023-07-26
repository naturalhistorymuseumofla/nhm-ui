import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '../Button';

interface FormProps {
  children: React.ReactNode[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>, formData: any) => void;
  action?: string;
  method?: string;
  useDefaultButton?: boolean;
  classes?: string;
}

export const Form: React.FC<FormProps> = ({ ...props }) => {
  const [formData, setFormData] = useState({});

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form
      className={clsx(
        'flex flex-col gap-6 w-full',
        props.classes
      )}
      onSubmit={(e) => props.onSubmit(e, formData)}
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
      
      { props.useDefaultButton && <Button classes='mt-4'>
        <input type="submit" className="w-fit"/>
      </Button>}

    </form>
  );
};
