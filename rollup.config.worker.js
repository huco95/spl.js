const terser = require('@rollup/plugin-terser');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');


export default args => ({
    input: 'src/spl-worker.js',
    output: [
        { file: 'src/build/js/worker.js', format: 'es' }
    ],
    plugins: args.configDebug ?
        [nodeResolve(), json(), commonjs()] :
        [nodeResolve(), json(), commonjs(), terser()]
});
