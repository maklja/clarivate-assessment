import { render } from '@testing-library/react';

import { MessageTile, MessageType } from './message-tile';

describe('Test Message component', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<MessageTile text="Default message" />);
        expect(baseElement).toBeTruthy();
    });

    it('should have a proper default text message', () => {
        const testText = 'Default message';
        const { getByText } = render(<MessageTile text={testText} />);
        expect(getByText(testText)).toBeTruthy();
    });

    it('should have a proper error text message', () => {
        const testText = 'Error message';
        const { getByText } = render(
            <MessageTile text={testText} type={MessageType.Error} />
        );
        expect(getByText(testText)).toBeTruthy();
    });

    it('should have a proper children when provided', () => {
        const testText = 'Default message';
        const { getByText } = render(
            <MessageTile text={testText}>
                <span>Child span</span>
            </MessageTile>
        );
        expect(getByText('Child span')).toBeTruthy();
    });
});
