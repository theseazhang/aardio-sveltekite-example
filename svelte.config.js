import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'aardio-project/dist/build',
			assets: 'aardio-project/dist/build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		})
	},
	preprocess: [vitePreprocess({})],
	onwarn: (warning, handler) => {
		if (warning.code === 'svelte(missing-declaration)') return;
		if (warning.code.startsWith('a11y-')) return;
		handler(warning);
	}
};

export default config;
