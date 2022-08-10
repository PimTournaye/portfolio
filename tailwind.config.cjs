module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'bau-red': '#BE1E2D',
				'bau-blue': '#21409A',
				'bau-yellow': '#FFDE17',
				'bright-bau-red': '#e83c28',
				'bright-bau-blue': '#091c44',
				'bright-bau-yellow': '#f4b800',
				'timberwolf': '#DBD4D3'
			}
		},
		borderRadius: {
			"full": "100px"
		}
	}
};

// --gainsboro: #d8dddeff;
// --golden-yellow: #ffde17ff;
// --dark-cornflower-blue: #21409aff;
// --red-ncs: #be1e2dff;
// --black: #000000ff;
