import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../src/components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Forms/Checkbox",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = (args) => (
  <Checkbox data-testId="CheckboxField-id" {...args} />
);

Default.args = {
  label: "Checkbox",
};