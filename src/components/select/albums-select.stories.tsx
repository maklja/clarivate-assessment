import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { jest } from '@storybook/jest';

import { AlbumsSelect } from './albums-select';

const meta: Meta<typeof AlbumsSelect> = {
    component: AlbumsSelect,
    title: 'AlbumsSelect',
    decorators: (Story) => (
        <QueryClientProvider client={new QueryClient()}>
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        </QueryClientProvider>
    ),
};

export default meta;

type Story = StoryObj<typeof AlbumsSelect>;

export const Default: Story = {
    args: {
        onChange: jest.fn(),
    },
};
