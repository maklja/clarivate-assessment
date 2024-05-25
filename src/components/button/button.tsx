import styles from './button.module.scss';

export interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
    return (
        <button type="button" className={styles['button']} onClick={onClick}>
            {text}
        </button>
    );
}
