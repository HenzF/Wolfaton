const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./docs/src/scripts/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader",
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "docs/dist/"),
    publicPath: "docs/dist/",
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "styles.css"
    }),
      new HtmlWebPackPlugin({
      template: "./docs/index.html",
      filename: "./index.html",
      favicon: "./docs/favicon.ico"
    })
  ]
};