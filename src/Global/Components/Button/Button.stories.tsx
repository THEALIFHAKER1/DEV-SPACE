import type { Meta, StoryObj } from '@storybook/react';

import Button, { type IButtonProps } from './Button';

const props: IButtonProps = {
  name: 'Button',
};

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    name: props.name,
  },
};

export const Secondary: Story = {
  args: {
    name: props.name,
    intent: 'secondary',
  },
};
