import type { Meta, StoryObj } from '@storybook/react';

import { PhotoImg } from './photo-image';
import exampleImage from '../../assets/example.png';
import noImage from '../../assets/no-image.gif';

const meta: Meta<typeof PhotoImg> = {
    component: PhotoImg,
    title: 'PhotoImg',
    decorators: (Story) => (
        <div style={{ width: '300px', height: '300px' }}>
            <Story />
        </div>
    ),
};

export default meta;

type Story = StoryObj<typeof PhotoImg>;

export const Default: Story = {
    args: {
        alt: 'my image',
        src: exampleImage,
        fallbackSrc: noImage,
    },
};

export const Fallback: Story = {
    args: {
        alt: 'my image',
        src: '/invalid.png',
        fallbackSrc: noImage,
    },
};
