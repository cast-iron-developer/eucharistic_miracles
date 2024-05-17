const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [
		require('flowbite/plugin'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow-white': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadowWhite') }
			);
		})
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			gridTemplateColumns: {
				standard: '1fr 8fr 1fr',
				'standard-mobile': '15px 8fr 15px'
			},
			screens: {
				// additional media queries because I like flexibility
				'only-sm': { min: '640px', max: '767px' },
				// => @media (min-width: 640px and max-width: 767px) { ... }

				'only-md': { min: '768px', max: '1023px' },
				// => @media (min-width: 768px and max-width: 1023px) { ... }

				'only-lg': { min: '1024px', max: '1279px' },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }

				'only-xl': { min: '1280px', max: '1535px' },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }

				'only-2xl': { min: '1536px' },

				// additional media queries because I like flexibility
				'to-sm': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'to-md': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'to-lg': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'to-xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				'to-2xl': { min: '1536px' },

				// Starting the inverse of the standard tailwind media queries bc i hate them.
				'max-xs': { max: '639px' },

				'max-sm': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'max-md': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'max-lg': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'max-xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }
				'max-2xl': { min: '1536px' }
			},
			dropShadow: {
				light: '0 0 .75rem rgba(255, 255, 255, .7)',
				dark: '0 0 .75rem rgba(0, 0, 0, .7)'
			},
			textShadowWhite: {
				sm: '0 1px 2px #eee',
				DEFAULT: '1px 2px #eee',
				lg: '0 8px 16px #eee'
			},
			colors: {
				primary: {
					DEFAULT: '#00233c',
					100: '#00070c',
					200: '#000e18',
					300: '#001525',
					400: '#001d31',
					500: '#00233c',
					600: '#005897',
					700: '#008cf1',
					800: '#4bb4ff',
					900: '#a5daff'
				},
				secondary: {
					DEFAULT: '#48beff',
					100: '#002a41',
					200: '#005583',
					300: '#007fc4',
					400: '#06a8ff',
					500: '#48beff',
					600: '#6cccff',
					700: '#91d8ff',
					800: '#b6e5ff',
					900: '#daf2ff'
				},
				tertiary: {
					DEFAULT: '#3d7068',
					100: '#0c1615',
					200: '#192d2a',
					300: '#25433f',
					400: '#315953',
					500: '#3d7068',
					600: '#559b91',
					700: '#7db7af',
					800: '#a8cfc9',
					900: '#d4e7e4'
				},
				w: {
					DEFAULT: '#eee'
				},
				b: {
					DEFAULT: '#333'
				}
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 200ms ease-in-out'
			}
		}
	}
};
