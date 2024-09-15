import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home/Home';
import { Root } from './layout/root/root';

import { store } from './store';

export const routes = [
	{ path: '/', element: <Home /> }
];

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: routes,
	},
]);

declare global {
	interface Window {
		Telegram: any;
	}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
