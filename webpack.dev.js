const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  optimization: {
    runtimeChunk: "single",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 9001,
    hot: true,
    devMiddleware: { writeToDisk: true },
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
  plugins: [new CleanWebpackPlugin()],
});
