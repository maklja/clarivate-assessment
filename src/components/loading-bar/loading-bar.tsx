import { useEffect, useState } from 'react';
import styles from './loading-bar.module.scss';

export interface LoadingBarProps {
    // prevent "blinking" on loading, this prop will ensure
    // that loading bar is shown only if operation is takes more then showDelay
    showDelay?: number;
}

export function LoadingBar({ showDelay = 500 }: LoadingBarProps) {
    const [visible, setVisible] = useState(showDelay <= 0);

    useEffect(() => {
        const timerId = setTimeout(() => setVisible(true), showDelay);
        return () => clearTimeout(timerId);
    }, [showDelay]);

    return visible ? (
        <div data-testid="loading-bar" className={styles['loading-bar']}>
            <div
                className={`${styles['loading-bar__progress']} ${styles['loading-bar__progress--indeterminate1']}
            `}
            ></div>
            <div
                className={`${styles['loading-bar__progress']} ${styles['loading-bar__progress--indeterminate1']}}`}
            ></div>
        </div>
    ) : null;
}
