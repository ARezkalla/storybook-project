import { Meta, StoryObj } from "@storybook/react";

import HelloWorld from "./HelloWorld";

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
  title: "HelloWorld",
};
export default meta;

type Story = StoryObj<typeof HelloWorld>;

export const Base: Story = {
  args: {
    name: "World",
  },
};
