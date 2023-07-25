import React from 'react';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';

interface Option {
  name: string;
  unavailable: boolean;
}

interface SelectProps {
  options: Option[];
  defaultValue?: string;
  onSelect?: () => void;
}

export const Select = ({ options, defaultValue, onSelect }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue ? {name: defaultValue}: options[0]
  );

  const returnSwitch = (open: boolean) =>
    open ? (
      <svg xmlns="http://www.w3.org/2000/svg" height="20px"viewBox="0 0 24 24" width="20px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
      </svg>
    );

  const onChange = (value: string) => {
    console.log(value)
    value && setSelectedOption({ name: value });
    onSelect && onSelect();
  };

  return (
    <div>
      <Listbox value={selectedOption.name} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button className="flex items-center justify-between w-full p-4 font-bold bg-white border-2 border-black border-solid">
              {selectedOption.name}
              {returnSwitch(open)}
            </Listbox.Button>
            <Listbox.Options className="py-2 bg-white border-2 border-t-0 border-black">
              {options.map((option, i) => (
                <Listbox.Option
                  key={i}
                  value={option.name}
                  disabled={option.unavailable}
                >
                  {({ active, selected }) => (
                    <li
                      className={clsx(
                        `px-4 py-3`,
                        option.unavailable
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'cursor-pointer',
                        active && 'bg-gray-200',
                        selected && 'font-bold'
                      )}
                    >
                      {option.name}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};
