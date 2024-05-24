import { Link } from 'react-router-dom';

export function ErrorPage() {
    return (
        <div>
            Error page <Link to="/">Back to dashboard</Link>
        </div>
    );
}
