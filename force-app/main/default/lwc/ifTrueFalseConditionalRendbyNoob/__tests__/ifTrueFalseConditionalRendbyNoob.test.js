import { createElement } from 'lwc';
import IfTrueFalseConditionalRendbyNoob from 'c/ifTrueFalseConditionalRendbyNoob';

describe('c-if-true-false-conditional-rendby-noob', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-if-true-false-conditional-rendby-noob', {
            is: IfTrueFalseConditionalRendbyNoob
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});