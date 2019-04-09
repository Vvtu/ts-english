import React from 'react';
import renderer from 'react-test-renderer';

import AppCode from 'AppCode/AppCode';

const dictionaries = {
	dictionary1: [ { 'Русский текст': 'Russian text' } ],
	dictionary2: [],
};

describe('AppCode test   ', () => {
	it('test 1 - Always fails because of random side effect', () => {
		const component = renderer.create(<AppCode dictionaries={dictionaries} />);
		const result = component.toJSON();
		expect(result).toMatchSnapshot();
	});
});
