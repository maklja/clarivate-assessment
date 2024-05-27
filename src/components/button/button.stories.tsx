import type { Meta, StoryObj } from '@storybook/react';
import { jest } from '@storybook/jest';

import { Button } from './button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        text: 'Button name',
        title: 'Button title',
        onClick: jest.fn(),
    },
};
