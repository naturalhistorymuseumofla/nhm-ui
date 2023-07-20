import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../src/TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/Forms/TextArea",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = (args) => (
  <TextArea data-testId="TextArea-id" {...args} />
);

Default.args = {
  label: "Label",
  name: "name",
  placeholder: "Placeholder",
  required: false,
  disabled: false,
  width: "full",
  classes: "",
};
