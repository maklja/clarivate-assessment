import styles from './button.module.scss';

export interface ButtonProps {
    text: string;
    title?: string;
    onClick?: () => void;
}

export function Button({ text, title, onClick }: ButtonProps) {
    return (
        <button
            data-testid="button"
            title={title}
            type="button"
            className={styles['button']}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
