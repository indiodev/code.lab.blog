import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';

export function App(): React.ReactElement {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}
