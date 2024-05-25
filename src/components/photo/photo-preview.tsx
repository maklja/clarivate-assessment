import { Photo } from '../../api/phone';
import { PhotoImg } from './photo-image';
import styles from './photo-preview.module.scss';

export interface PhotoPreviewProps {
    photo: Photo;
    fallbackImageSrc: string;
    onClick?: (photo: Photo) => void;
}

export function PhotoPreview({
    photo,
    fallbackImageSrc,
    onClick,
}: PhotoPreviewProps) {
    function handleTileClick() {
        onClick?.(photo);
    }

    return (
        <div
            className={styles['image-tile']}
            title={photo.title}
            onClick={handleTileClick}
        >
            <div className={styles['image-tile__img']}>
                <PhotoImg
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    fallbackSrc={fallbackImageSrc}
                />
            </div>

            <div className={styles['image-tile__title']}>{photo.title}</div>
        </div>
    );
}
