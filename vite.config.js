import { sveltekit } from '@sveltejs/kit/vite';
import watchAndRun from '@kitql/vite-plugin-watch-and-run'
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		watchAndRun([
		  {
			name: 'gen',
			watchKind: ['add', 'change', 'unlink'],
			watch: path.resolve('src/**/*.(gql|svelte)'),
			run: 'npm run gen',
			delay: 300
		  }
		])
	  ],
};

export default config;
