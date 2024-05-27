import { render } from '@testing-library/react';

import { Message, MessageType } from './message';

describe('Test Message component', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Message text="Default message" />);
        expect(baseElement).toBeTruthy();
    });

    it('should have a proper default text message', () => {
        const testText = 'Default message';
        const { getByText } = render(<Message text={testText} />);
        expect(getByText(testText)).toBeTruthy();
    });

    it('should have a proper error text message', () => {
        const testText = 'Error message';
        const { getByText } = render(
            <Message text={testText} type={MessageType.Error} />
        );
        expect(getByText(testText)).toBeTruthy();
    });

    it('should have a proper children when provided', () => {
        const testText = 'Default message';
        const { getByText } = render(
            <Message text={testText}>
                <span>Child span</span>
            </Message>
        );
        expect(getByText('Child span')).toBeTruthy();
    });
});
