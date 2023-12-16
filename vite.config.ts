import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/http-live-streaming-demo/",
	plugins: [sveltekit()]
});
