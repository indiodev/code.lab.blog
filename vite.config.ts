import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			App: resolve(__dirname, './app'),
			Components: resolve(__dirname, './app/components'),
			Layouts: resolve(__dirname, './app/layouts'),
			Lib: resolve(__dirname, './app/lib'),
			Pages: resolve(__dirname, './app/pages'),
			Routes: resolve(__dirname, './app/routes'),
			Models: resolve(__dirname, './app/models'),
		},
	},
});
