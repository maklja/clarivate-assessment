import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './elements-list-page.module.scss';
import { Message, MessageType } from '../../components/message/message';
import { Button } from '../../components/button/button';
import { LoadingBar } from '../../components/loading-bar/loading-bar';
import { FabButton } from '../../components/button/fab-button';
import { AlbumsSelect } from '../../components/select/albums-select';
import { usePhotos } from '../../hooks/photo/usePhotos';
import { Photo } from '../../api/phone';
import { Album } from '../../api/album';
import {
    addFavoritePhoto,
    removeFavoritePhoto,
    useFavoritePhotos,
} from '../../store/root-store';
import { PhotosList } from '../../components/photo/photos-list';

export interface ElementsListPageProps {
    fabVisibilityThreshold?: number;
}

export function ElementsListPage({
    fabVisibilityThreshold = 100,
}: ElementsListPageProps) {
    const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
    const [albumId, setAlbumId] = useState<number | null>(null);
    const { ref, inView } = useInView();
    const { isFetching, isLoading, isError, data, fetchNextPage, hasNextPage } =
        usePhotos(albumId);
    const favoritePhotos = useFavoritePhotos();

    useEffect(() => {
        if (inView && hasNextPage && !isFetching) {
            fetchNextPage();
        }
    }, [inView, isFetching, fetchNextPage, hasNextPage, data?.pageParams]);

    useEffect(() => {
        const scrollHandler = () => {
            setScrollToTopVisible(window.scrollY > fabVisibilityThreshold);
        };
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [fabVisibilityThreshold]);

    function handleImageTileClick(photo: Photo) {
        const isFavorite = favoritePhotos.some(
            (currentPhoto) => currentPhoto.id === photo.id
        );
        if (isFavorite) {
            removeFavoritePhoto(photo.id);
        } else {
            addFavoritePhoto(photo);
        }
    }

    function handleAlbumChange(album: Album) {
        setAlbumId(album.id);
    }

    function handleRefresh() {
        fetchNextPage();
    }

    function handleScrollToTop() {
        window.scrollTo(0, 0);
    }

    const photos = data?.pages.flat() ?? [];
    const hasData = Boolean(photos.length) || isLoading || isError;
    return (
        <>
            <div className={styles['albums-select-container']}>
                <div className={styles['albums-select']}>
                    <AlbumsSelect onChange={handleAlbumChange} />
                </div>
            </div>

            <div className={styles['elements-page']}>
                <PhotosList
                    photos={photos}
                    favoritePhotos={favoritePhotos}
                    favoriteIconVisible
                    onPhotoTileClick={handleImageTileClick}
                >
                    <div
                        ref={ref}
                        className={styles['elements-grid-shadow']}
                    ></div>
                </PhotosList>

                {!hasData ? <Message text="No photos."></Message> : null}
                {isError ? (
                    <Message
                        text="Failed to load data. Please try again later."
                        type={MessageType.Error}
                    >
                        <Button text="Refresh" onClick={handleRefresh} />
                    </Message>
                ) : null}
                <div className={styles['elements-loader']}>
                    {isFetching ? <LoadingBar /> : null}
                </div>
            </div>
            {scrollToTopVisible ? (
                <div className={styles['scroll-to-top']}>
                    <FabButton
                        text="↑"
                        title="Scroll to the top"
                        onClick={handleScrollToTop}
                    />
                </div>
            ) : null}
        </>
    );
}
