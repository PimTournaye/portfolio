import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import watchAndRun from '@kitql/vite-plugin-watch-and-run'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vite: {
		plugins: [
		  watchAndRun([
			{
			  watch: '**/*.(gql|graphql)',
			  run: 'pnpm run gen',
			},
		  ]),
		],
	  },
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
};

export default config;
