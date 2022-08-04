import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	envDir: './env',
	plugins: [sveltekit()],
	server: {
		port: 3000,
	},
	preview : {
		port: 4444,
	},
};

export default config;
