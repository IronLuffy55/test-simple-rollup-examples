import alias from '@rollup/plugin-alias'
export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    alias({
      entries: [
        {find: 'add', replacement: '../../add/src/index'},
        {find: '@nested/multiply', replacement: '../../multiply/src/index'},
      ],
    }),
  ],
}
