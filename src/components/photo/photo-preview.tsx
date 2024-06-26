import { Photo } from '../../api/phone';
import { PhotoImg } from './photo-image';
import styles from './photo-preview.module.scss';

export interface PhotoPreviewProps {
    photo: Photo;
    fallbackImageSrc: string;
    favorite: boolean;
    favoriteIconVisible?: boolean;
    onClick?: (photo: Photo) => void;
}

export function PhotoPreview({
    photo,
    fallbackImageSrc,
    favorite,
    favoriteIconVisible = false,
    onClick,
}: PhotoPreviewProps) {
    function handleTileClick() {
        onClick?.(photo);
    }

    const favIcon = favorite ? 'icon-heart' : 'icon-heart-empty';
    return (
        <div
            data-testid={`photo-tile-${photo.id}`}
            className={`${styles['image-tile']} ${
                favorite ? styles['image-tile-favorite'] : ''
            }`}
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
            <div className={`${styles['image-tile__identifier']}`}>
                {photo.id}
            </div>
            {favoriteIconVisible ? (
                <div
                    data-testid={`photo-tile-${photo.id}_fav-icon`}
                    className={`${styles['image-tile__favorite']}`}
                >
                    <span className={favIcon}></span>
                </div>
            ) : null}
        </div>
    );
}
