import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Default.args = {
  disabled: false,
  children: "Default",
  variant: "default",
};

export const NHM: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
NHM.args = {
  disabled: false,
  children: "NHM",
  variant: "nhm",
};

export const LBTP: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
LBTP.args = {
  disabled: false,
  children: "LBTP",
  variant: "lbtp",
};

export const Destructive: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Destructive.args = {
  disabled: false,
  children: "Destructive",
  variant: "destructive",
};


