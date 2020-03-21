const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // webpack will take the files from ./src/index
  entry: "./src/index",

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/static/index.html",
      filename: "./index.html"
    })
  ]
};
