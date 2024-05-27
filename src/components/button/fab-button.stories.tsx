import type { Meta, StoryObj } from '@storybook/react';
import { jest } from '@storybook/jest';

import { FabButton } from './fab-button';

const meta: Meta<typeof FabButton> = {
    component: FabButton,
    title: 'FabButton',
};

export default meta;

type Story = StoryObj<typeof FabButton>;

export const Default: Story = {
    args: {
        text: '☆',
        title: 'Button title',
        onClick: jest.fn(),
    },
};
