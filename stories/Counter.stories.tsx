import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "../src/Counter/index";
import { useState } from "react";

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: "Components/Counter",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = (args: any) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 0 ? count - 1 : 0);
  return(
    <Counter 
    data-testId="InputField-id" 
    {...args} 
    decrease={decrease}
    increase={increase}
    count={count}/>
  )
};

Default.args = {
  direction: "right",
};