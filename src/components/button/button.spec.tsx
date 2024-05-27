import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './button';

describe('Test Button component', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Button text="Test text" />);
        expect(baseElement).toBeTruthy();
    });

    it('should have a proper text as the name', () => {
        const testText = 'Test text';
        const { getByText } = render(<Button text={testText} />);
        expect(getByText(testText)).toBeTruthy();
    });

    it('should trigger onClick event when clicked', () => {
        const mockClickHandler = vi.fn();

        const { getByTestId } = render(
            <Button text="Test text" onClick={mockClickHandler} />
        );
        const button = getByTestId('button');
        expect(button).toBeTruthy();

        fireEvent.click(button);

        expect(mockClickHandler.mock.calls.length).toBe(1);
    });

    it('should have a proper title placed', () => {
        const testTitle = 'Test title';
        const { getByTitle } = render(
            <Button text="Test text" title={testTitle} />
        );
        expect(getByTitle(testTitle)).toBeTruthy();
    });
});
