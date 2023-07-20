import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Form } from "../src/Form";
import { RadioGroup } from "../src/RadioGroup";
import { Radio } from "../src/Radio";
import { Input } from "../src/Input";
import { InputGroup } from "../src/InputGroup";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Components/Forms/Form",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = (args) => (
  <Form data-testId="RadioField-id" {...args}>
    <InputGroup>
      <Input type="text" width="1/2" label="First Name" name="firstName" />
      <Input type="text" width="1/2" label="Last Name" name="lastName" />
      <Input type="password" width="1/3" label="Password" name="password" />
      <Input type="email" width="2/3" label="Email" name="email" />
    </InputGroup>
    <RadioGroup title="Radio Group:">
      <Radio label="Radio 1" name="example" />
      <Radio label="Radio 2" name="example" />
      <Radio label="Radio 3" name="example" />
    </RadioGroup>

  
  </Form>
);

Default.args = {
};
