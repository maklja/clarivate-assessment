import styles from './photo-image.module.scss';
import { useState } from 'react';

export interface ImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
}

export function PhotoImg({ src, alt, fallbackSrc }: ImageProps) {
    const [loading, setLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState(src);

    function handleImageLoad() {
        setLoading(false);
    }

    function handleImageLoadError() {
        setLoading(true);
        setImageSrc(fallbackSrc);
    }

    return (
        <div className={styles['image-photo']}>
            <img
                className={`${styles['image-photo__img']} ${
                    loading ? '' : styles['image-photo__img--loaded']
                }`}
                src={imageSrc}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageLoadError}
                loading="lazy"
            />
            {loading ? (
                <div className={styles['image-photo__loading']}></div>
            ) : null}
        </div>
    );
}
