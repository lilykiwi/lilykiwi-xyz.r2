import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'output',
    format: 'umd',
    sourcemap: false,
    name: 'PreactApp',
  },
  watch: {
    clearScreen: false,
    include: "src/**",
    chokidar: {
      usePolling: true
    }
  },
  plugins: [
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
      ]
    }),
    nodeResolve(),
    typescript(),
    scss({
      fileName: 'bundle.css'
    }),
    html({
      title: 'Preact App',
    }),
  ],
};