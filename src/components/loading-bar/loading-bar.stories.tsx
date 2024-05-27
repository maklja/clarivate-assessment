import type { Meta, StoryObj } from '@storybook/react';

import { LoadingBar } from './loading-bar';

const meta: Meta<typeof LoadingBar> = {
    component: LoadingBar,
    title: 'LoadingBar',
};

export default meta;

type Story = StoryObj<typeof LoadingBar>;

export const Default: Story = {
    args: {
        showDelay: 200,
    },
};
