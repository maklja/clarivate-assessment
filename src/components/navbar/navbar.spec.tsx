import { ComponentType, PropsWithChildren } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import {
    fireEvent,
    getByTestId,
    getByText,
    render,
} from '@testing-library/react';

import { Navbar } from './navbar';

const createRouterWrapper =
    (initialEntries: string[]): ComponentType =>
    ({ children }: PropsWithChildren) =>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>;

describe('Test Navbar component', () => {
    it('should render successfully', async () => {
        const { baseElement } = render(<Navbar />, {
            wrapper: createRouterWrapper(['/']),
        });
        expect(baseElement).toBeTruthy();
    });

    it('should navigate to the list page after link click', async () => {
        const { container } = render(
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<span>dashboard</span>} />
                    <Route path="/list" element={<span>list</span>} />
                </Routes>
            </>,
            {
                wrapper: createRouterWrapper(['/']),
            }
        );

        const listLink = getByTestId(container, 'nav-link-list');
        fireEvent.click(listLink);

        expect(getByText(container, 'list')).toBeTruthy();
    });

    it('should navigate to the dashboard page after link click', async () => {
        const { container } = render(
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<span>dashboard</span>} />
                    <Route path="/list" element={<span>list</span>} />
                </Routes>
            </>,
            {
                wrapper: createRouterWrapper(['/list']),
            }
        );

        const dashboardLink = getByTestId(container, 'nav-link-dashboard');
        fireEvent.click(dashboardLink);

        expect(getByText(container, 'dashboard')).toBeTruthy();
    });
});
