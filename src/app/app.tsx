import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './app.module.scss';
import { Navbar } from '../components/navbar/navbar';

const queryClient = new QueryClient();

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navbar />

                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
