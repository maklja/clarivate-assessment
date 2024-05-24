import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage } from './dashboard/dashboard-page';
import { ElementsListPage } from './elements/elements-list-page';
import { ErrorPage } from './error/error-page';
import App from './app/app';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: '/list',
                element: <ElementsListPage />,
            },
            {
                path: '',
                element: <DashboardPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
