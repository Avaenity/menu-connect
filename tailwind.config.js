module.exports = {
	purge: ['./components/**/*.js', './pages/**/*.js'],
	theme: {
		fontSize: {
			'2xs': '.60rem',
			'xs': '.75rem',
			'tiny': '.85rem',
			'sm': '.9rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		fontFamily: {
			sans: [
				'Open Sans',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
		},
		screens: {
			'i5': {'raw': '(max-height: 570px)'},
			// => @media iphone5
			'i6': {'raw': '(max-height: 670px)'},
			// => @media iphone6/7/8
			'i6+': {'raw': '(max-height: 740px)'},
			// => @media iphone6/7/8 plus
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}
