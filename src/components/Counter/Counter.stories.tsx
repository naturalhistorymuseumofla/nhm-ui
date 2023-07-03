import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Counter from "./index";

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: "Components/Counter",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = (args) => (
  <Counter data-testId="InputField-id" {...args} />
);

Default.args = {
  direction: "left",
  price: 10,
};