import { Meta, StoryObj } from "@storybook/react";

import AppBar from "./AppBar";

const meta: Meta<typeof AppBar> = {
  component: AppBar,
  title: "AppBar",
};
export default meta;

type Story = StoryObj<typeof AppBar>;

export const Base: Story = {
  args: {
    title: "AppBar",
  },
};
