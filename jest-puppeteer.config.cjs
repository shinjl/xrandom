module.exports = {
	launch: {
		headless: true,
		defaultViewport: {
			width: 1280,
			height: 900
		},
		ignoreHTTPSErrors: true,
		args: ['--window-size=1280,900'],
		devtools: false
	},
	server: {
		command: 'npm run preview',
		port: 3000,
		launchTimeout: 180000
	}
};
