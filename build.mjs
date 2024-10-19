import { build } from "tsup"

(async function buildAll() {

    await build({
        entry: ["src/index.ts"],
        format: ['cjs', "esm"],
        external: ["react"],
        splitting: false,
        sourcemap: true,
        clean: true,
        dts: true,
        outDir: 'dist',
        jsxFactory: "React.createElement",
        outExtension({ format }) {
            return ({ js: format === 'cjs' ? ".cjs" : ".mjs" })
        },
    })


})()