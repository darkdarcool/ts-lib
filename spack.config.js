const { config } = require('@swc/core/spack');
const { writeFileSync } = require("fs");

module.exports = config({
  entry: {
    web: __dirname + "/src/index.ts",
  },
  output: {
    path: __dirname + "/dist",
    name: "index.js",
  },
  options: {
    module: {
      type: "es6"
    },
  }
});

writeFileSync(__dirname + "/dist/package.json", JSON.stringify({
  "type": "module",
}));