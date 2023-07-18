import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { H1, } from '../src/Text';
import { TicketRow } from '../src/TicketRow';
import { Cart } from '../src/Cart';


const meta: Meta<typeof Cart> = {
  component: Cart,
  title: 'Components/Cart',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = (args: any) => {
  return <Cart {...args} />;
};

Default.args = {
  groups: [
    {
      name: 'Adult',
      price: 10,
      description: 'Ages 13+',
    },
    {
      name: 'Senior',
      price: 7,
      description: 'Ages 65+',
    },
    {
      name: 'Child',
      price: 5,
      description: 'Ages 3-12',
    },
    {
      name: 'Infant',
      price: 0,
      description: 'Ages 0-2',
    }
  ]
};
