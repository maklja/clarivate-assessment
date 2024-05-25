import { PropsWithChildren } from 'react';
import styles from './message.module.scss';

export enum MessageType {
    Default = 'default',
    Error = 'error',
}

export interface MessageProps {
    text: string;
    type?: MessageType;
}

export function Message({
    text,
    type = MessageType.Default,
    children,
}: PropsWithChildren<MessageProps>) {
    return (
        <div
            className={`${styles['message']} ${
                type === MessageType.Error ? styles['error-message'] : ''
            }`}
        >
            <div>{text}</div>
            <div>{children}</div>
        </div>
    );
}
