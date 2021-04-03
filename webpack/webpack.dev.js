const merge = require("webpack-merge");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require("./webpack.common");

const config = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
};

module.exports = merge(common, config);
