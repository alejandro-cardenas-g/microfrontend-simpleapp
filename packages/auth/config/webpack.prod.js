const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackCommon = require("./webpack.common");

const prodConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApliFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(webpackCommon, prodConfig);
