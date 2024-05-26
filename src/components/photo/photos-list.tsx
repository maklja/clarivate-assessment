import { PropsWithChildren } from 'react';
import styles from './photos-list.module.scss';
import { Photo } from '../../api/phone';
import { PhotoPreview } from './photo-preview';
import noImageSrc from '../../assets/no-image.gif';

export interface PhotosListProps {
    photos: Photo[];
    favoritePhotos?: Photo[];
    favoriteIconVisible?: boolean;
    onPhotoTileClick?: (photo: Photo) => void;
}

export function PhotosList({
    photos,
    favoritePhotos = [],
    favoriteIconVisible = false,
    onPhotoTileClick,
    children,
}: PropsWithChildren<PhotosListProps>) {
    if (photos.length === 0) {
        return null;
    }

    return (
        <div className={styles['elements-grid']}>
            {photos.map((photo) => (
                <PhotoPreview
                    key={photo.id}
                    photo={photo}
                    fallbackImageSrc={noImageSrc}
                    favorite={favoritePhotos.some(
                        (favPhoto) => favPhoto.id === photo.id
                    )}
                    favoriteIconVisible={favoriteIconVisible}
                    onClick={() => onPhotoTileClick?.(photo)}
                />
            ))}

            {children}
        </div>
    );
}
