/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sansSerif: ['Source Sans 3', 'sans-serif'],
			mono: ['Source Code Pro', 'monospace'],
			handWriting: ['Kalam', 'cursive']
		},
		extend: {
			borderWidth: {
				1: '1px'
			},
			boxShadow: {
				colored: '0px 7px 16px rgba(127, 91, 220, 0.002)',
				coloredHover: '0px 16px 25px rgba(127, 91, 220, 0.3)',
				tableRow: '0px 0px 6px rgba(0, 0, 0, 0.16)'
			},
			colors: {
				lavenderIndigo: '#8657E1',
				daisyBush: '#4714a5',
				goldenFizz: '#feff40',
				whisper: '#f9f4f9',
				pastelPurple: '#b2a1bb',
				purple: '#7209b7',
				robinEggBlue: '#00E9c0',
				bluegem: '#3813a0',
				carribeanGreen: '#1CC6A0',
				scarlet: '#f72f45',
				monsoon: '#777878',
				silver: '#c0c0c0',
				gallery: '#efeaf2',
				fog: '#decaec'
			},
			gridTemplateColumns: {
				invoiceTable: '100px 100px 60px 1fr 116px 32px 32px',
				invoiceTableMobile: '1fr 90px'
			},
			zIndex: {
				navBarToggle: 91,
				navBar: 90
			}
		}
	},
	plugins: []
};
