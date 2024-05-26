import { Message } from '../../components/message/message';
import { PhotosList } from '../../components/photo/photos-list';
import { useFavoritePhotos } from '../../store/root-store';
import styles from './dashboard-page.module.scss';

export function DashboardPage() {
    const favoritePhotos = useFavoritePhotos();

    return (
        <div className={styles['dashboard-page']}>
            <PhotosList photos={favoritePhotos} />

            {favoritePhotos.length === 0 ? (
                <Message text="No favorites photos."></Message>
            ) : null}
        </div>
    );
}
