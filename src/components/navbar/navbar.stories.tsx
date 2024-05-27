import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import '../../translations/i18n';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'Navbar',
    decorators: (Story) => (
        <MemoryRouter initialEntries={['/']}>
            <Story />
        </MemoryRouter>
    ),
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {},
};
