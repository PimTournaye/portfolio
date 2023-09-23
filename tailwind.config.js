import { join } from 'path'

import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { Bauhaus } from './src/Bauhaus'
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
    fontFamily: {
      'sans': ['"IBM Plex Sans"', 'sans-serif'],
      'mono': ['"IBM Plex Mono"', 'monospace'],
    },
    extend: {
      colors: {
        'bau-red': '#BE1E2D',
        'bau-blue': '#21409A',
        'bau-yellow': '#FFDE17',
        'bright-bau-red': '#e83c28',
        'bright-bau-blue': '#091c44',
        'bright-bau-yellow': '#f4b800',
        'timberwolf': '#DBD4D3',
        'bright-background': '#EADCCF',
        nyu: {
          '300': '#330662',
          '400': '#702b9d',
          '500': '#7b5aa6',
          '600': '#ab82c5',
          '700': '#eee6f3',
        },
      },
    },
  },
	plugins: [
		typography,
		skeleton({
			themes: {
				custom: [
					Bauhaus,
				],
			},
		}),
	],
};
