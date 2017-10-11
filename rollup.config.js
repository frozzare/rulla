import babel    from 'rollup-plugin-babel';
import babelrc  from 'babelrc-rollup';
import uglify   from 'rollup-plugin-uglify';
import istanbul from 'rollup-plugin-istanbul';

let plugins = [
  babel(babelrc()),
];

if (process.env.BUILD === 'production') {
  plugins.push(
    uglify()
  );
}

if (process.env.BUILD !== 'production') {
  plugins.push(
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    })
  );
}

export default {
  input: 'lib/index.js',
  plugins: plugins,
  output: [
    {
      file: 'dist/main.bundle.js',
      format: 'umd',
      name: 'roller',
      sourcemap: true
    }
  ]
};