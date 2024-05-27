import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FabButton } from '../../components/button/fab-button';
import { MessageTile } from '../../components/message/message-tile';
import { PhotosList } from '../../components/photo/photos-list';
import {
    setDashboardScrollPosition,
    useFavoritePhotos,
    usePageScrollPosition,
} from '../../store/root-store';
import styles from './dashboard-page.module.scss';
import { useScrollThreshold } from '../../hooks/utils/useScrollThreshold';

export interface DashboardPageProps {
    fabVisibilityThreshold?: number;
}

export function DashboardPage({ fabVisibilityThreshold }: DashboardPageProps) {
    const { t } = useTranslation();
    const favoritePhotos = useFavoritePhotos();
    const scrollToTopVisible = useScrollThreshold(
        fabVisibilityThreshold,
        setDashboardScrollPosition
    );
    const { dashboardScrollPosition } = usePageScrollPosition();

    useEffect(() => {
        window.scrollTo(0, dashboardScrollPosition);
    }, [dashboardScrollPosition]);

    function handleScrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className={styles['dashboard-page']}>
            <PhotosList photos={favoritePhotos} />

            {favoritePhotos.length === 0 ? (
                <MessageTile
                    text={t('clarivate.dashboard.no-favorite-photos')}
                ></MessageTile>
            ) : null}

            {scrollToTopVisible ? (
                <div className={styles['scroll-to-top']}>
                    <FabButton
                        iconClass="icon-up"
                        title={t('clarivate.pages.scroll-to-top')}
                        onClick={handleScrollToTop}
                    />
                </div>
            ) : null}
        </div>
    );
}
