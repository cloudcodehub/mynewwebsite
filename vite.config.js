import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: '/wwww/',
    build: {
        outDir: 'dist',
    },
    plugins: [vue()],
});
