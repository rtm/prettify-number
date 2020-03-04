// rollup.config.js

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true
  },
  plugins: [
    typescript(),
    resolve({jsnext: true})
  ]
};
