import type { Meta, StoryObj } from '@storybook/react';
import { jest } from '@storybook/jest';

import { MessageTile, MessageType } from './message-tile';
import { Button } from '../button/button';

const meta: Meta<typeof MessageTile> = {
    component: MessageTile,
    title: 'MessageTile',
};

export default meta;

type Story = StoryObj<typeof MessageTile>;

export const Default: Story = {
    args: {
        text: 'This is my message',
    },
};

export const Error: Story = {
    args: {
        text: 'This is my error message',
        type: MessageType.Error,
    },
};

export const Complex: Story = {
    args: {
        text: 'This is my message',
        type: MessageType.Error,
        children: (
            <Button
                text="My inner button"
                title="My inner button"
                onClick={jest.fn()}
            />
        ),
    },
};
