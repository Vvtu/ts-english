import React from 'react';
import renderer from 'react-test-renderer';

import PopupWindowForAdvancedMenu from './PopupWindowForAdvancedMenu';

describe('PopupWindowForAdvancedMenu test   ', () => {
    it('test 1', () => {
        const component = renderer.create(<PopupWindowForAdvancedMenu  />);
        const result = component.toJSON();
        expect(result).toMatchSnapshot();
    });
});
