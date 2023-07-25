import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Form } from "../src/Form";
import { RadioGroup } from "../src/RadioGroup";
import { Radio } from "../src/Radio";
import { Input } from "../src/Input";
import { InputGroup } from "../src/InputGroup";
import { Checkbox } from "../src/Checkbox";
import { CheckboxGroup } from "../src/CheckboxGroup";
import { TextArea } from "../src/TextArea";
import { Select } from "../src/Select";

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
      <Input type="text" width="1/2" label="First Name" name="firstName"/>
      <Input type="text" width="1/2" label="Last Name" name="lastName" />
      <Input type="password" width="1/3" label="Password" name="password" caption="Passwords should be at least 14 characters long"/>
      <Input type="email" width="2/3" label="Email" name="email" />
      <TextArea label="Text Area" name="textArea" width="1/2" />
    </InputGroup>
    <RadioGroup title="Radio Group:">
      <Radio label="Radio 1" name="example" />
      <Radio label="Radio 2" name="example" />
      <Radio label="Radio 3" name="example" />
    </RadioGroup>
    <CheckboxGroup title="Checkbox Group:">
      <Checkbox label="Option 1" name="1" />
      <Checkbox label="Option 2" name="2" />
      <Checkbox label="Option 3" name="3" />
    </CheckboxGroup>
    <Select name="Select" defaultValue="Select" options={[
    { name: 'Durward Reynolds', unavailable: false },
    { name: 'Kenton Towne', unavailable: false },
    { name: 'Therese Wunsch', unavailable: false },
    ]}/>
  </Form>
);

Default.args = {
  onSubmit: (formData: any) => {console.log(formData)}
};
