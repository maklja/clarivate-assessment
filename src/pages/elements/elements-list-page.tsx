import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './elements-list-page.module.scss';
import {
    MessageTile,
    MessageType,
} from '../../components/message/message-tile';
import { Button } from '../../components/button/button';
import { LoadingBar } from '../../components/loading-bar/loading-bar';
import { FabButton } from '../../components/button/fab-button';
import { AlbumsSelect } from '../../components/select/albums-select';
import { usePhotos } from '../../hooks/photo/usePhotos';
import { useTranslation } from 'react-i18next';
import { Photo } from '../../api/phone';
import { Album } from '../../api/album';
import {
    addFavoritePhoto,
    removeFavoritePhoto,
    selectAlbum,
    setPhotoListScrollPosition,
    useFavoritePhotos,
    usePageScrollPosition,
    useSelectedAlbum,
} from '../../store/root-store';
import { PhotosList } from '../../components/photo/photos-list';
import { useScrollThreshold } from '../../hooks/utils/useScrollThreshold';

export interface ElementsListPageProps {
    fabVisibilityThreshold?: number;
}

export function ElementsListPage({
    fabVisibilityThreshold,
}: ElementsListPageProps) {
    const { t } = useTranslation();
    const { ref, inView } = useInView();
    const favoritePhotos = useFavoritePhotos();
    const scrollToTopVisible = useScrollThreshold(
        fabVisibilityThreshold,
        setPhotoListScrollPosition
    );
    const { photoListScrollPosition } = usePageScrollPosition();
    const albumId = useSelectedAlbum();
    const { isFetching, isLoading, isError, data, fetchNextPage, hasNextPage } =
        usePhotos(albumId);

    useEffect(() => {
        window.scrollTo(0, photoListScrollPosition);
    }, [photoListScrollPosition]);

    useEffect(() => {
        if (inView && hasNextPage && !isFetching) {
            fetchNextPage();
        }
    }, [inView, isFetching, fetchNextPage, hasNextPage, data?.pageParams]);

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
        selectAlbum(album.id);
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
                    <AlbumsSelect
                        selectedAlbumId={albumId}
                        onChange={handleAlbumChange}
                    />
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

                {!hasData ? (
                    <MessageTile
                        text={t('clarivate.elements-list.no-photos')}
                    ></MessageTile>
                ) : null}
                {isError ? (
                    <MessageTile
                        text={t('clarivate.elements-list.error')}
                        type={MessageType.Error}
                    >
                        <Button
                            text={t('clarivate.elements-list.button-refresh')}
                            onClick={handleRefresh}
                        />
                    </MessageTile>
                ) : null}
                <div className={styles['elements-loader']}>
                    {isFetching ? <LoadingBar /> : null}
                </div>
            </div>
            {scrollToTopVisible ? (
                <div className={styles['scroll-to-top']}>
                    <FabButton
                        iconClass="icon-up"
                        title={t('clarivate.pages.scroll-to-top')}
                        onClick={handleScrollToTop}
                    />
                </div>
            ) : null}
        </>
    );
}
