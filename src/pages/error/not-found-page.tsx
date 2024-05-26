import { useTranslation } from 'react-i18next';
import { Message, MessageType } from '../../components/message/message';

export function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div>
            <Message
                text={t('clarivate.not-found-page')}
                type={MessageType.Error}
            />
        </div>
    );
}
