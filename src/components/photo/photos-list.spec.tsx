import {
    fireEvent,
    getAllByAltText,
    getByAltText,
    getByTestId,
    getByText,
    render,
} from '@testing-library/react';

import { PhotosList } from './photos-list';
import { Photo } from '../../api/phone';

describe('Test PhotosList component', () => {
    const photos: Photo[] = [
        {
            id: 1,
            albumId: 1,
            title: 'Test photo 1',
            url: 'http://localhost:3000/test-image-1.png',
            thumbnailUrl: 'http://localhost:3000/test-thumbnail-1.png',
        },
        {
            id: 2,
            albumId: 1,
            title: 'Test photo 2',
            url: 'http://localhost:3000/test-image-2.png',
            thumbnailUrl: 'http://localhost:3000/test-thumbnail-2.png',
        },
    ];

    it('should render photos tile with correct image, title and id', async () => {
        const { container } = render(
            <PhotosList photos={photos} favoriteIconVisible={false} />
        );

        expect(getAllByAltText(container, /Test photo/).length).toBe(2);

        photos.forEach((photo) => {
            const photoTile = getByTestId(container, `photo-tile-${photo.id}`);

            expect(
                getByAltText<HTMLImageElement>(photoTile, photo.title).src
            ).toBe(photo.thumbnailUrl);

            expect(
                getByAltText<HTMLImageElement>(photoTile, photo.title).src
            ).toBe(photo.thumbnailUrl);

            expect(getByText(photoTile, photo.title)).toBeTruthy();

            expect(
                getByText(photoTile, photo.id.toString(), {
                    exact: true,
                })
            ).toBeTruthy();

            expect(
                photoTile.querySelector('[data-testid="favorite-icon"]')
            ).toBeNull();
        });
    });

    it('should marked favorite icon on photo with id 2', async () => {
        const favPhotos = [photos[1]];
        const { container } = render(
            <PhotosList
                photos={photos}
                favoriteIconVisible={true}
                favoritePhotos={favPhotos}
            />
        );

        photos.forEach((photo) => {
            const photoTile = getByTestId(container, `photo-tile-${photo.id}`);

            const favIcon = getByTestId(
                photoTile,
                `photo-tile-${photo.id}_fav-icon`
            );
            expect(favIcon).toBeTruthy();

            const markedIconClass = favPhotos.includes(photo)
                ? 'icon-heart'
                : 'icon-heart-empty';
            expect(
                favIcon?.firstElementChild?.classList.contains(markedIconClass)
            ).toBeTruthy();
        });
    });

    it('should trigger onClick event when clicked on photo with id 1', async () => {
        const mockClickHandler = vi.fn();

        const { container } = render(
            <PhotosList
                photos={photos}
                favoriteIconVisible={true}
                onPhotoTileClick={mockClickHandler}
            />
        );

        const photoTile = getByTestId(container, `photo-tile-1`);
        fireEvent.click(photoTile);

        expect(mockClickHandler.mock.calls.length).toBe(1);
        expect(mockClickHandler.mock.calls[0]).toContain(photos[0]);
    });

    it('should not render any children when there are no photos', async () => {
        const { container } = render(
            <PhotosList photos={[]} favoriteIconVisible={true} />
        );

        expect(container.children.length).toBe(0);
    });
});
