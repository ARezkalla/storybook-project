import { Meta, StoryObj } from "@storybook/react";

import HelloWorld from "./HelloWorld";

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
  title: "HelloWorld",
};
export default meta;

type Story = StoryObj<typeof HelloWorld>;

export const Base: Story = {};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const ContainedSecondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
  },
};
