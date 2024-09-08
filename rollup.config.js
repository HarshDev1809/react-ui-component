// import babel from '@rollup/plugin-babel';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';
// import css from 'rollup-plugin-css-only';

// export default {
//     input: 'src/index.js',
//     output: [
//       {
//         file: 'dist/index.js',
//         format: 'cjs',
//         exports: 'named',
//         sourcemap: true
//       },
//       {
//         file: 'dist/index.es.js',
//         format: 'es',
//         exports: 'named',
//         sourcemap: true
//       }
//     ],
//     external: ['react', 'react-dom'],
//     plugins: [
//       peerDepsExternal(),
//       resolve(),
//       babel({
//         exclude: 'node_modules/**',
//         babelHelpers: 'runtime',
//       presets: ['@babel/preset-env', '@babel/preset-react'],
//       plugins: ['@babel/plugin-transform-runtime']
//       }),
//       commonjs(),
//       postcss({
//         modules: true, // Enable CSS Modules
//         extensions: ['.css'], // Files to process
//         extract: true,
//         minimize: true,
//       }),
//       css({ output: 'bundle.css' }),
//     ]
//   };

// import babel from '@rollup/plugin-babel';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';

// export default {
//   input: 'src/index.js',
//   output: [
//     {
//       file: 'dist/index.js',
//       format: 'cjs',
//       exports: 'named',
//       sourcemap: true
//     },
//     {
//       file: 'dist/index.es.js',
//       format: 'es',
//       exports: 'named',
//       sourcemap: true
//     }
//   ],
//   external: ['react', 'react-dom'],
//   plugins: [
//     peerDepsExternal(),
//     resolve(),
//     babel({
//       exclude: 'node_modules/**',
//       babelHelpers: 'runtime',
//       presets: ['@babel/preset-env', '@babel/preset-react'],
//       plugins: ['@babel/plugin-transform-runtime']
//     }),
//     commonjs(),
//     postcss({
//       modules: true, // Enable CSS Modules
//       extensions: ['.css'], // Files to process
//       extract: 'bundle.css', // Extract CSS to a separate file
//       minimize: true, // Minify the CSS
//     }),
//   ]
// };


// import babel from '@rollup/plugin-babel';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';
// import css from 'rollup-plugin-css-only';

// export default {
//   input: 'src/index.js',
//   output: [
//     {
//       file: 'dist/index.js',
//       format: 'cjs',
//       exports: 'named',
//       sourcemap: true
//     },
//     {
//       file: 'dist/index.es.js',
//       format: 'es',
//       exports: 'named',
//       sourcemap: true
//     }
//   ],
//   external: ['react', 'react-dom'],
//   plugins: [
//     peerDepsExternal(),
//     resolve(),
//     babel({
//       exclude: 'node_modules/**',
//       babelHelpers: 'runtime',
//       presets: ['@babel/preset-env', '@babel/preset-react'],
//       plugins: ['@babel/plugin-transform-runtime']
//     }),
//     commonjs(),
//     postcss({
//       extract: 'bundle.css', // Extract CSS to a separate file
//       minimize: true, // Minify the CSS
//     }),
//     css({ output: 'bundle.css' }), // Optional: Use this if you want to handle non-module CSS
//   ],
// };


// import babel from '@rollup/plugin-babel';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';

// export default {
//   input: 'src/index.js',
//   output: [
//     {
//       file: 'dist/index.js',
//       format: 'cjs',
//       exports: 'named',
//       sourcemap: true
//     },
//     {
//       file: 'dist/index.es.js',
//       format: 'es',
//       exports: 'named',
//       sourcemap: true
//     }
//   ],
//   external: ['react', 'react-dom'],
//   plugins: [
//     peerDepsExternal(),
//     resolve(),
//     babel({
//       exclude: 'node_modules/**',
//       babelHelpers: 'runtime',
//       presets: ['@babel/preset-env', '@babel/preset-react'],
//       plugins: ['@babel/plugin-transform-runtime']
//     }),
//     commonjs(),
//     postcss({
//       modules: true, // Enable CSS Modules if needed
//       extensions: ['.css'],
//       extract: true, // Extract CSS to a separate file
//       minimize: true
//     }),
//     css({ output: 'bundle.css' })
//   ],
// };

import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime']
    }),
    commonjs(),
    postcss({
      modules: false, // Set to true if using CSS Modules
      extensions: ['.css'],
      extract: 'bundle.css', // Extract CSS to a separate file
      minimize: true
    }),
  ]
};



  