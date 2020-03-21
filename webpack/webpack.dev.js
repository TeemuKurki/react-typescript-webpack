const merge = require("webpack-merge");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require("../webpack.common");

const config = {
  mode: "development",
  devtool: "source-map",
  plugins: [new ForkTsCheckerWebpackPlugin()]
};

module.exports = merge(common, config);
