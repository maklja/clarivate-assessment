import { Outlet } from 'react-router-dom';
import styles from './app.module.scss';
import { Navbar } from '../components/navbar/navbar';

export function App() {
    return (
        <div>
            <Navbar />

            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
