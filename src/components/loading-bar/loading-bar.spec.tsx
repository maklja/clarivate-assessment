import { render, waitFor } from '@testing-library/react';

import { LoadingBar } from './loading-bar';

describe('Test LoadingBar component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should render successfully', () => {
        const { baseElement } = render(<LoadingBar />);
        expect(baseElement).toBeTruthy();
    });

    it("shouldn't be displayed first 500ms", () => {
        const { container } = render(<LoadingBar />);

        expect(
            container.querySelector('[data-testid="loading-bar"]')
        ).toBeNull();
    });

    it('should be displayed after 100ms', async () => {
        const { getByTestId } = render(<LoadingBar showDelay={100} />);

        vi.runAllTimersAsync();
        const loadingBar = await waitFor(() => getByTestId('loading-bar'));
        expect(loadingBar).toBeTruthy();
    });
});
