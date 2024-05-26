import { Store } from '@tanstack/store';
import { useStore } from '@tanstack/react-store';
import { Photo } from '../api/phone';

export interface RootStore {
    albumId: number | null;
    favoritePhotos: Photo[];
    photoListScrollPosition: number;
    dashboardScrollPosition: number;
}

const store = new Store<RootStore>({
    albumId: null,
    favoritePhotos: [],
    photoListScrollPosition: 0,
    dashboardScrollPosition: 0,
});

export const useFavoritePhotos = () =>
    useStore(store, (state) => state.favoritePhotos);

export const useSelectedAlbum = () => useStore(store, (state) => state.albumId);

export const usePageScrollPosition = () =>
    useStore(store, (state) => ({
        photoListScrollPosition: state.photoListScrollPosition,
        dashboardScrollPosition: state.dashboardScrollPosition,
    }));

export function selectAlbum(albumId: number) {
    store.setState((state) => {
        return {
            ...state,
            albumId: albumId,
        };
    });
}

export function setPhotoListScrollPosition(scrollPosition: number) {
    store.setState((state) => {
        return {
            ...state,
            photoListScrollPosition: scrollPosition,
        };
    });
}

export function setDashboardScrollPosition(scrollPosition: number) {
    store.setState((state) => {
        return {
            ...state,
            dashboardScrollPosition: scrollPosition,
        };
    });
}

export function addFavoritePhoto(photo: Photo) {
    store.setState((state) => {
        return {
            ...state,
            favoritePhotos: [...state.favoritePhotos, photo],
        };
    });
}

export function removeFavoritePhoto(photoId: number) {
    store.setState((state) => {
        return {
            ...state,
            favoritePhotos: state.favoritePhotos.filter(
                (photo) => photo.id !== photoId
            ),
        };
    });
}
