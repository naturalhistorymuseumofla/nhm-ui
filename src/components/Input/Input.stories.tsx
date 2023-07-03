import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);

Default.args = {
  disabled: false,
  required: false,
  label: "Default",
  id: "default",
  placeholder: "Default",
};

export const Disabled: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);

Disabled.args = {
  disabled: true,
  required: false,
  label: "Disabled",
  id: "disabled",
  placeholder: "Disabled",
};

export const Required: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Required.args = {
  disabled: false,
  required: true,
  label: "Required",
  id: "required",
  placeholder: "Required",
};
