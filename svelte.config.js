import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import houdini from 'houdini/preprocess';
import watchAndRun from '@kitql/vite-plugin-watch-and-run';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $houdini: './$houdini'
    }
  },
  vite: {
    plugins: [
      watchAndRun([
        {
          watch: '**/*.(gql|graphql)',
          run: 'pnpm run gen'
        }
      ])
    ]
  },
  preprocess: [preprocess(), houdini()]
};

export default config;
