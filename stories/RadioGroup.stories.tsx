import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../src/components/RadioGroup";
import { Radio } from "../src/components/Radio";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Components/Forms/RadioGroup",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = (args) => (
  <RadioGroup data-testId="RadioGroup-id" {...args}>
  </RadioGroup>
);

Default.args = {
  onChange: (event:any) => console.log(event.target.value),
  title: "Radio Group:",
  children: [
    <Radio label="Radio 1" name="example" />,
    <Radio label="Radio 2" name="example" />,
    <Radio label="Radio 3" name="example" />,
  ]
};
