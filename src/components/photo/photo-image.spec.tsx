import { getByAltText, render } from '@testing-library/react';

import { PhotoImg } from './photo-image';

describe('Test PhotoImg component', () => {
    it('should render image with correct src', async () => {
        const alt = 'test-image';
        const src = 'http://localhost:3000/test-image.png';
        const { container } = render(
            <PhotoImg
                src={src}
                fallbackSrc="http://test-fallback-image.png"
                alt={alt}
            />
        );
        const img: HTMLImageElement = getByAltText(container, alt);
        expect(img.src).toBe(src);
    });
});
