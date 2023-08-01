import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3, H4, Paragraph } from "../src/components/Text";

const meta: Meta<typeof H1> = {
  component: H1,
  title: "Atoms/Text",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof H1>;

export const Text: Story = (args: any) => (
  <>
    <H1>{args.children === "" ? "H1" : args.children }</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
  </>
);

Text.args = {
  children: "",
};

