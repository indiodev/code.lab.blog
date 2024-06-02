import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'Components/common/header';

export function Home(): React.ReactElement {
	return (
		<div className="flex flex-col h-screen w-screen">
			<Header />
			<div className="h-auto bg-gray-blog flex-1 py-10 sm:py-20 w-full">
				<Outlet />
			</div>
		</div>
	);
}
