import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'Layouts/index';
import { Blogs } from 'Pages/blogs';

export function Router(): React.ReactElement {
	return (
		<React.Suspense fallback="Loading...">
			<Routes>
				<Route
					element={<Layout.Home />}
					path="/"
				>
					<Route
						index
						element={<Blogs />}
					/>
				</Route>
			</Routes>
		</React.Suspense>
	);
}
