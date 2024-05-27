import type { Meta, StoryObj } from '@storybook/react';
import { jest } from '@storybook/jest';

import '../../styles.scss';

import { PhotosList } from './photos-list';
import exampleImage from '../../assets/example.png';
import { Photo } from '../../api/phone';

const meta: Meta<typeof PhotosList> = {
    component: PhotosList,
    title: 'PhotosList',
};

export default meta;

type Story = StoryObj<typeof PhotosList>;

const photos: Photo[] = [
    {
        id: 1,
        albumId: 1,
        thumbnailUrl: exampleImage,
        url: exampleImage,
        title: 'Example tile 1',
    },
    {
        id: 2,
        albumId: 2,
        thumbnailUrl: exampleImage,
        url: exampleImage,
        title: 'Example tile 2',
    },
];

export const Default: Story = {
    args: {
        photos,
        onPhotoTileClick: jest.fn(),
    },
};

export const FavoritesMarked: Story = {
    args: {
        photos,
        favoritePhotos: [photos[1]],
        favoriteIconVisible: true,
        onPhotoTileClick: jest.fn(),
    },
};
