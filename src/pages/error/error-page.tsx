import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { Message, MessageType } from '../../components/message/message';

export function ErrorPage() {
    const navigate = useNavigate();

    function handleDashboardClick() {
        navigate('/', { replace: true });
    }

    return (
        <div>
            <Message
                text="Something went wrong. Please try again later."
                type={MessageType.Error}
            >
                <Button text="Dashboard" onClick={handleDashboardClick} />
            </Message>
        </div>
    );
}
