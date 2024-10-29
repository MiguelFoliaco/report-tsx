import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.ts', // Archivo de entrada
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss({
            extract: true, // Extrae el CSS en un archivo separado
            minimize: true, // Minifica el CSS
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            clean: true,
            tsconfig: './tsconfig.json',
            exclude: ["test"]
        }),
        babel({
            exclude: ['node_modules/**', 'test/**'],
            presets: ['@babel/preset-react'],
        }),
        terser(), // Minificación
    ],
    external: ['react', 'react-dom'], // Excluye react y react-dom
};
