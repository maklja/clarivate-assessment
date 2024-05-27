import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import { FabButton } from './fab-button';

describe('Test FabButton component', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<FabButton text="Test text" />);
        expect(baseElement).toBeTruthy();
    });

    it('should have a proper text as the name', () => {
        const testText = 'Test text';
        const { getByText } = render(<FabButton text={testText} />);
        expect(getByText(testText)).toBeTruthy();
    });

    it('should trigger onClick event when clicked', () => {
        const mockClickHandler = vi.fn();

        const { getByTestId } = render(
            <FabButton text="Test text" onClick={mockClickHandler} />
        );
        const button = getByTestId('fab-button');
        expect(button).toBeTruthy();

        fireEvent.click(button);

        expect(mockClickHandler.mock.calls.length).toBe(1);
    });

    it('should have a proper title placed', () => {
        const testTitle = 'Test title';
        const { getByTitle } = render(
            <FabButton text="Test text" title={testTitle} />
        );
        expect(getByTitle(testTitle)).toBeTruthy();
    });
});
