import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PhotoCallout } from "../src/components/PhotoCallout";

const meta: Meta<typeof PhotoCallout> = {
  component: PhotoCallout,
  title: "Components/PhotoCallout",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PhotoCallout>;

export const Default: Story = (args) => (
  <PhotoCallout data-testId="InputField-id" {...args} />
);

Default.args = {
  title: "Default",
  label: "Default",
  src: "https://nhm.org/sites/default/files/styles/2_1_extra_large_1700_x_850_/public/2019-02/20170825_0906_summernights_mp_small.jpg?h=c11c9c1d",
  subtitle: "Default",
  linkText: "Click here!",
  link: "https://www.google.com",
}
