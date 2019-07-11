export default {
	head: {
		titleTemplate: '%s | Comics',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: 'Dagelijkse dosis comics' },
			{ name: 'theme-color', content: '#000000' },
			{ name: 'msapplication-TileColor', content: '#2d89ef' }
		],
		link: [
			{ rel: 'manifest', href: '/manifest.json' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
			{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
			{ rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
		]
	},
	css: [
		'@/static/index.css'
	]
}
