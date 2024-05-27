import styles from './fab-button.module.scss';

export interface FabButtonProps {
    text?: string;
    iconClass?: string;
    title?: string;
    onClick?: () => void;
}

export function FabButton({ text, title, iconClass, onClick }: FabButtonProps) {
    return (
        <button
            data-testid="fab-button"
            title={title}
            className={styles.fab}
            onClick={onClick}
        >
            <span className={iconClass}>{text}</span>
        </button>
    );
}
