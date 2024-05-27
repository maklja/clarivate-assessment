import { PropsWithChildren } from 'react';
import styles from './message-tile.module.scss';

export enum MessageType {
    Default = 'default',
    Error = 'error',
}

export interface MessageTileProps {
    text: string;
    type?: MessageType;
}

export function MessageTile({
    text,
    type = MessageType.Default,
    children,
}: PropsWithChildren<MessageTileProps>) {
    return (
        <div
            data-testid="message"
            className={`${styles['message']} ${
                type === MessageType.Error ? styles['error-message'] : ''
            }`}
        >
            <div>{text}</div>
            <div>{children}</div>
        </div>
    );
}
