const { watch } = require("fs");
const path = require("path");

module.exports = {
  entry: "./src/assets/js/main.js", // メインのTypeScriptファイル
  output: {
    filename: "bundle.js", // 出力するJSファイル名
    path: path.resolve(__dirname, "./src/dist"), // 出力先ディレクトリ
  },
  resolve: {
    extensions: [".js"], // 拡張子を自動的に解決
  },
  watch: true,
  mode: "development",
};
