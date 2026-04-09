import React from 'react';
import clsx from 'clsx';
import { H3, Paragraph } from './Text';
import {
  Accordion as UIAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';

export type AccordionItem = {
  id: string | number;
  title: string;
  body: React.ReactNode;
};

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  singleOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  singleOpen = false,
}) => {
  const type = singleOpen ? 'single' : 'multiple';

  return (
    <div className={clsx('w-full', className)}>
      <UIAccordion type={type} collapsible={singleOpen}>
        {items.map(item => (
          <AccordionItem
            key={String(item.id)}
            value={String(item.id)}
            className="border-t border-t-neutral-150 border-t-[1.1px]"
          >
            <AccordionTrigger className="flex-row-reverse justify-end gap-2">
              <H3 classes="m-0">{item.title}</H3>
            </AccordionTrigger>
            <AccordionContent>
              {typeof item.body === 'string' ? (
                <Paragraph>{item.body}</Paragraph>
              ) : (
                item.body
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </UIAccordion>
    </div>
  );
};

export default Accordion;
