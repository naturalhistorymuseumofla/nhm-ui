import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { H1, } from '../src/Text';
import { TicketRow } from '../src/TicketRow';

const Checkout: any = ({ ...props }) => {

  const groups = {
    'Adult': {
      price: 10,
      description: "Age 13+"
    },
    'Senior': {
      price: 8,
      description: "Age 65+"
    },
    'Student': {
      price: 8,
      description: "Age 13+ with valid ID"
    },
    'Child': {
      price: 6,
      description: "Age 3-12"
    },
    'Infant': {
      price: 1,
      description: "Age 0-2"
    },
  }
  
  const [cart, setCart] = useState(
    Object.keys(groups).reduce((g, key) => {
      g[key] = 0
      return g;
    },{})
  );

  return (
    <div className="flex flex-col w-full gap-4">
      <H1>Checkout</H1>
      <div className="flex flex-col gap-8">
        {Object.keys(groups).map((g, i) => {
          const group = groups[g];
          return (
            <TicketRow
              direction="right"
              price={group.price}
              group={g}
              key={i}
              description="Age 13+"
              setTotal={price => {
                setCart({
                  ...cart,
                  [g]: price
                });
              }}
            />
          );
        })}
        <div className='flex justify-start w-full text-3xl font-bold lining-nums'>
          {'$ ' + Object.keys(cart).reduce((sum, key) => {
            return sum + (cart[key] * groups[key].price);
            }, 0).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
          }
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Checkout> = {
  component: Checkout,
  title: 'Components/Checkout',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkout>;

export const Default: Story = (args: any) => {
  return <Checkout />;
};

Default.args = {
};
