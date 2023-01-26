import { build } from 'esbuild';


/** @type {import('esbuild').BuildOptions} */
const options = {
    entryPoints: ['./src/index.ts'],
    minify: process.env.minify === 'true',
    bundle: true,
    platform: 'node',
    outfile: './dist/index.js',
    sourcemap: true,
    target: 'es2020',
    outfile: './dist/index.js'
}

build(options).catch(err => {
    process.stderr.write(err.stderr)
    process.exit(1)
})