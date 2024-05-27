import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/button/button';
import {
    MessageTile,
    MessageType,
} from '../../components/message/message-tile';

export function ErrorPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleDashboardClick() {
        navigate('/', { replace: true });
    }

    return (
        <div>
            <MessageTile
                text={t('clarivate.error-page')}
                type={MessageType.Error}
            >
                <Button
                    text={t('clarivate.links.dashboard')}
                    onClick={handleDashboardClick}
                />
            </MessageTile>
        </div>
    );
}
