import styles from './fab-button.module.scss';

export interface FabButtonProps {
    text: string;
    title?: string;
    onClick?: () => void;
}

export function FabButton({ text, title, onClick }: FabButtonProps) {
    return (
        <button
            data-testid="fab-button"
            title={title}
            className={styles.fab}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
