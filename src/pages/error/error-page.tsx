import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/button/button';
import { Message, MessageType } from '../../components/message/message';

export function ErrorPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleDashboardClick() {
        navigate('/', { replace: true });
    }

    return (
        <div>
            <Message text={t('clarivate.error-page')} type={MessageType.Error}>
                <Button
                    text={t('clarivate.links.dashboard')}
                    onClick={handleDashboardClick}
                />
            </Message>
        </div>
    );
}
