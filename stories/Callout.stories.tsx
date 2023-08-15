import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Callout } from "../src/components/Callout";

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: "Components/Callout",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Default: Story = (args) => (
  <Callout data-testId="Callout-id" {...args} />
);

Default.args = {
  title: "Default callout",
  label: "Default",
  subtitle: "Without photo (src prop ommitted)",
  linkText: "Click here!",
  link: "https://www.google.com",
}

export const Photo: Story = (args) => (
  <Callout data-testId="Callout-id" {...args} />
)

Photo.args = {
  title: "Callout",
  label: "With Photo",
  subtitle: "A photo is provided with src prop",
  linkText: "Click here!",
  link: "https://www.google.com",
  domain: "nhm",
  src: "https://nhm.org/sites/default/files/styles/2_1_extra_large_1700_x_850_/public/2023-07/Red-tailed%20Hawk%20in%20Cedar%20Creek%20smoke%20flipped.jpeg?h=b0b7936d",
}