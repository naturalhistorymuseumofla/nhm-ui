import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../src/components/Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Components/Forms/Radio",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = (args) => (
  <Radio data-testId="RadioField-id" {...args} />
);

Default.args = {
  label: "Radio",
};
