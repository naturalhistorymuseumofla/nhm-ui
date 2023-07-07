import React from 'react';
import clsx from 'clsx';
import '../tailwind.css';
import { Counter } from '../Counter';
import { H3 } from '../Text';

/**
 * Ticket option row for ticketing shopping cart.
 */

interface TicketRowProps {
  direction: 'left' | 'right';
  setTotal?: Function;
  price: number;
  group?: string;
  description?: string;
}

export const TicketRow: React.FC<TicketRowProps> = ({ ...props }) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-8 md:gap-4',
        props.direction === 'left' ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <Counter
        direction={props.direction}
        price={props.price}
        setTotal={props.setTotal}
      />
      <H3>{'$' + props.price.toFixed(2)}</H3>
      <div className="font-700">{props.group}</div>
      <div>{props.description}</div>
    </div>
  );
};