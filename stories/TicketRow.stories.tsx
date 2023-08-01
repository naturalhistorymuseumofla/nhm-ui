import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TicketRow } from "../src/components/TicketRow";

const meta: Meta<typeof TicketRow> = {
  component: TicketRow,
  title: "Components/TicketRow",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TicketRow>;

export const Default: Story = (args: any) => (
  <TicketRow {...args} />
);

Default.args = {
  direction: "left",
  group: "Adult",
  description: "Ages 13+",
  price: 10,
};