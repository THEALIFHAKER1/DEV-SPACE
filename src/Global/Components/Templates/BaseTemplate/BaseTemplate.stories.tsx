import type { Meta, StoryObj } from '@storybook/react';

import BaseTemplate, { type IBaseTemplateProps } from './BaseTemplate';

const props: IBaseTemplateProps = {
  name: 'BaseTemplate',
};

const meta: Meta<typeof BaseTemplate> = {
  component: BaseTemplate,
};

export default meta;

type Story = StoryObj<typeof BaseTemplate>;

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
