import {
    fireEvent,
    getByAltText,
    getByTestId,
    getByText,
    render,
} from '@testing-library/react';

import { PhotoPreview } from './photo-preview';
import { Photo } from '../../api/phone';

describe('Test PhotoPreview component', () => {
    const photo: Photo = {
        id: 1,
        albumId: 1,
        title: 'Test photo',
        url: 'http://localhost:3000/test-image.png',
        thumbnailUrl: 'http://localhost:3000/test-thumbnail.png',
    };

    it('should render photo tile with correct image, title and id', async () => {
        const { container } = render(
            <PhotoPreview
                photo={photo}
                fallbackImageSrc="http://test-fallback-image.png"
                favorite={false}
            />
        );

        expect(getByAltText<HTMLImageElement>(container, photo.title).src).toBe(
            photo.thumbnailUrl
        );

        expect(getByText(container, photo.title)).toBeTruthy();

        expect(getByText(container, photo.id.toString())).toBeTruthy();

        expect(
            container.querySelector('[data-testid="favorite-icon"]')
        ).toBeNull();
    });

    it('should render photo tile with marked favorite icon', async () => {
        const { container } = render(
            <PhotoPreview
                photo={photo}
                fallbackImageSrc="http://test-fallback-image.png"
                favorite={true}
                favoriteIconVisible={true}
            />
        );

        const favIcon = getByTestId(
            container,
            `photo-tile-${photo.id}_fav-icon`
        );
        expect(favIcon).toBeTruthy();

        expect(
            favIcon?.firstElementChild?.classList.contains('icon-heart')
        ).toBeTruthy();
    });

    it('should render photo tile with unmarked favorite icon', async () => {
        const { container } = render(
            <PhotoPreview
                photo={photo}
                fallbackImageSrc="http://test-fallback-image.png"
                favorite={false}
                favoriteIconVisible={true}
            />
        );

        const favIcon = getByTestId(
            container,
            `photo-tile-${photo.id}_fav-icon`
        );
        expect(favIcon).toBeTruthy();

        expect(
            favIcon?.firstElementChild?.classList.contains('icon-heart-empty')
        ).toBeTruthy();
    });

    it('should trigger onClick event when clicked', async () => {
        const mockClickHandler = vi.fn();

        const { container } = render(
            <PhotoPreview
                photo={photo}
                fallbackImageSrc="http://test-fallback-image.png"
                favorite={false}
                onClick={mockClickHandler}
            />
        );

        const photoPreview = getByTestId(container, `photo-tile-${photo.id}`);
        fireEvent.click(photoPreview);

        expect(mockClickHandler.mock.calls.length).toBe(1);
    });
});
