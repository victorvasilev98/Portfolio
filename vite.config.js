import { defineConfig } from 'vite'
import path from 'path'

export default {
	base: '/Portfolio',
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html')
			}
		}
	}
};