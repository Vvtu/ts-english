import React, { PureComponent } from 'react';

import AppCode from './AppCode/AppCode';
import dictionaries from './Dictionaries';

class App extends PureComponent {
	render() {
		return <AppCode dictionaries={dictionaries} />;
	}
}

export default App;
