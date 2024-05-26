import { Message, MessageType } from '../../components/message/message';

export function NotFoundPage() {
    return (
        <div>
            <Message
                text="Requested page is not found."
                type={MessageType.Error}
            />
        </div>
    );
}
