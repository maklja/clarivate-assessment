import type { Meta, StoryObj } from '@storybook/react';
import { jest } from '@storybook/jest';

import '../../styles.scss';

import { PhotoPreview } from './photo-preview';
import exampleImage from '../../assets/example.png';
import noImage from '../../assets/no-image.gif';
import { Photo } from '../../api/phone';

const meta: Meta<typeof PhotoPreview> = {
    component: PhotoPreview,
    title: 'PhotoPreview',
    decorators: (Story) => (
        <div style={{ width: '300px', height: '300px' }}>
            <Story />
        </div>
    ),
};

export default meta;

type Story = StoryObj<typeof PhotoPreview>;

const photo: Photo = {
    id: 1,
    albumId: 1,
    thumbnailUrl: exampleImage,
    url: exampleImage,
    title: 'Example tile',
};

export const Default: Story = {
    args: {
        photo,
        favorite: false,
        favoriteIconVisible: false,
        fallbackImageSrc: noImage,
        onClick: jest.fn(),
    },
};

export const FavoriteMarked: Story = {
    args: {
        photo,
        favorite: true,
        favoriteIconVisible: true,
        fallbackImageSrc: noImage,
        onClick: jest.fn(),
    },
};

export const FavoriteUnmarked: Story = {
    args: {
        photo,
        favorite: false,
        favoriteIconVisible: true,
        fallbackImageSrc: noImage,
        onClick: jest.fn(),
    },
};
