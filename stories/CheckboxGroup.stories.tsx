import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../src/CheckboxGroup';
import { Checkbox } from '../src/Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'Components/Forms/CheckboxGroup',
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = args => (
  <CheckboxGroup data-testId="CheckboxGroupField-id" {...args} />
);

Default.args = {
  title: 'CheckboxGroup',
  children: [
    <Checkbox label="Option 1" name="1" />,
    <Checkbox label="Option 2" name="2" />,
    <Checkbox label="Option 3" name="3" />
  ]
};