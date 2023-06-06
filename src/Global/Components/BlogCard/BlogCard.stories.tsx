import type { Meta, StoryObj } from '@storybook/react';

import BlogCard, { type IBlogCardProps } from './BlogCard';

const props: IBlogCardProps = {
  name: 'BlogCard',
};

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
};

export default meta;

type Story = StoryObj<typeof BlogCard>;

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
