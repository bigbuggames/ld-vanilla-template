const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const rules = require("./webpack.rules");

module.exports = {
  entry: ["./src/modules/index.js"],
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: "src/**/*.png", to: "images", flatten: true },
      { from: "src/**/*.mp3", to: "audio", flatten: true }
    ])
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: ""
  },
  resolve: {
    extensions: [".js", ".css"],
    // alias: {
    //   assets: path.resolve(__dirname, "../assets"),
    // },
    plugins: [new DirectoryNamedWebpackPlugin()]
  },
  module: {
    rules: rules
  }
};
