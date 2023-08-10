import React from 'react';
import { H2, Paragraph } from './Text';
import { Button } from './Button';
import clsx from 'clsx';

interface CalloutProps {
  title: string;
  label?: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
  src?: string;
  domain?: 'nhm' | 'lbtp' | 'default';
  classes?: string;
}

export const PhotoCallout: React.FC<CalloutProps> = ({ ...props }) => {
  const maxSizes = 'max-w-[90rem] max-h-[30rem] md:h-[40vw]';
  return (
    <a href={props.link} className="group">
      <div
        className={clsx(
          'relative flex flex-col gap-4 md:gap-2 md:block w-full',
          maxSizes,
          props.classes
        )}
      >
        <div
          className={clsx(
            'md:absolute absolute-center w-full overflow-hidden',
            maxSizes,
          )}
        >
          <img
            className="object-cover w-full h-full transition duration-500 ease-in-out md:brightness-90 group-hover:scale-102"
            src={props.src}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full gap-4 text-xs md:w-1/2 md:p-8 md:text-white">
          {props.label && (
            <div
              className={clsx(
                'px-4 py-2 font-bold uppercase md:text-white w-fit md:bg-black/60 tracking-widest',
                props.domain === 'lbtp' && 'bg-lbtp/10 text-lbtp',
                props.domain === 'nhm' && 'bg-nhm/10 text-nhm',
                (props.domain === 'default' || !props.domain) && 'bg-black/10'
              )}
            >
              {props.label}
            </div>
          )}
          <H2 classes="md:text-shadow-lg !mb-0">{props.title}</H2>
          <Paragraph classes="md:text-shadow-lg !text-base">
            {props.subtitle}
          </Paragraph>
          <a href={props.link} className='mt-2 w-fit h-fit'>
            <Button
              variant={props.domain && props.domain}
              classes="bg-white md:!outline-0 md:!text-black hover:md:!bg-gray-300"
            >
              {props.linkText}
            </Button>
          </a>
        </div>
      </div>
    </a>
  );
};
