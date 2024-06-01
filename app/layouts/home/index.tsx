import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'Components/common/header';

export function Home(): React.ReactElement {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
		</React.Fragment>
	);
}
