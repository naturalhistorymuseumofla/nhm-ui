import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cart } from '../src/components/Cart';


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
