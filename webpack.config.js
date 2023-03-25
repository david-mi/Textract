const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/app.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /(node_modules)/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "@langs": path.resolve(__dirname, "src/langs"),
      "@views": path.resolve(__dirname, "src/views"),
      "@containers": path.resolve(__dirname, "src/containers")
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/assets",
          to: "./assets"
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.html"),
      scriptLoading: "module"
    }),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 4000
  }
};