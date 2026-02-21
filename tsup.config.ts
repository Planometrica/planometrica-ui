import { defineConfig } from 'tsup'

export default defineConfig([
  // Main library bundle
  {
    entry: ['src/index.ts', 'src/icons/index.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom', 'tailwindcss'],
    treeshake: true,
    sourcemap: true,
    minify: false,
    splitting: false,
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // Tailwind preset (ESM + CJS for compatibility)
  {
    entry: ['src/tailwind.preset.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    external: ['tailwindcss', 'tailwindcss-animate', '@tailwindcss/typography'],
    outDir: 'dist',
    sourcemap: true,
  },
])
