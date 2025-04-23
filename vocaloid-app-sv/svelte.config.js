import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // ✅ keep this for older setups

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ postcss: true }), // ✅ enable Tailwind/PostCSS

	kit: {
		adapter: adapter()
	}
};

export default config;
