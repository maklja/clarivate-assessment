import { Store } from '@tanstack/store';
import { useStore } from '@tanstack/react-store';
import { Photo } from '../api/phone';

export interface RootStore {
    favoritePhotos: Photo[];
}

const store = new Store<RootStore>({
    favoritePhotos: [],
});

export const useFavoritePhotos = () =>
    useStore(store, (state) => state.favoritePhotos);

export const addFavoritePhoto = (photo: Photo) => {
    store.setState((state) => {
        return {
            ...state,
            favoritePhotos: [...state.favoritePhotos, photo],
        };
    });
};

export const removeFavoritePhoto = (photoId: number) => {
    store.setState((state) => {
        return {
            ...state,
            favoritePhotos: state.favoritePhotos.filter(
                (photo) => photo.id !== photoId
            ),
        };
    });
};
