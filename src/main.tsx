import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/app';
import './translations/i18n';
import { ErrorPage } from './pages/error/error-page';
import { NotFoundPage } from './pages/error/not-found-page';

const router = createBrowserRouter(
    [
        {
            path: '/',
            errorElement: <ErrorPage />,
            element: <App />,
            children: [
                {
                    path: '/list',
                    lazy: async () => {
                        const { ElementsListPage } = await import(
                            './pages/elements/elements-list-page'
                        );
                        return { Component: ElementsListPage };
                    },
                },
                {
                    path: '',
                    lazy: async () => {
                        const { DashboardPage } = await import(
                            './pages/dashboard/dashboard-page'
                        );
                        return { Component: DashboardPage };
                    },
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
