import { useTranslation } from 'react-i18next';
import {
    MessageTile,
    MessageType,
} from '../../components/message/message-tile';

export function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div>
            <MessageTile
                text={t('clarivate.not-found-page')}
                type={MessageType.Error}
            />
        </div>
    );
}
