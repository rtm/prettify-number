// rollup.config.js
//
// This defines the rollup process for the bundle which will served as part of the demo web app.
// Execute via `npm run build`.

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
