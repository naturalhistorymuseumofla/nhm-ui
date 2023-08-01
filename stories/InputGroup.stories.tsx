import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "../src/components/InputGroup";
import { Input } from "../src/components/Input";

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  title: "Components/Forms/InputGroup",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = (args) => (
  <InputGroup data-testId="InputGroup-id" {...args}>
    <Input type="text" width="1/2" label="First Name" name="firstName" />
    <Input type="text" width="1/2" label="Last Name" name="lastName" />
    <Input type="text" width="1/3" label="City" name="password" />
    <Input type="text" width="1/3" label="City" name="password" />
    <Input type="text" width="1/3" label="City" name="password" />
    <Input type="text" width="2/3" label="Address" name="password" />
    <Input type="text" width="1/3" label="City" name="password" />
    <Input type="email" label="Input" name="email" />
  </InputGroup>
);

Default.args = {
};