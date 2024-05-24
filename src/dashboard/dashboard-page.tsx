import { Link } from 'react-router-dom';

export function DashboardPage() {
    return (
        <div>
            Dashboard <Link to="/list">Go to list</Link>
        </div>
    );
}
