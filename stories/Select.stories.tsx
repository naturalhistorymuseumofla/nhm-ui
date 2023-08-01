import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../src/components/Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Forms/Select",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = (args) => (
  <Select data-testId="SelectField-id" {...args} />
);

Default.args = {
  name: 'Select',
  options: [
    { name: 'Durward Reynolds', unavailable: false },
    { name: 'Kenton Towne', unavailable: false },
    { name: 'Therese Wunsch', unavailable: false },
    { name: 'Benedict Kessler', unavailable: true },
    { name: 'Katelyn Rohan', unavailable: false },
  ],
  defaultValue: 'Select'
};