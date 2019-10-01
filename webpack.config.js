const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevServer = process.env.WEBPACK_DEV_SERVER;

module.exports = {
  context: __dirname,
  mode: "development",
  entry: __dir("index.ts"),
  devtool: "source-map",
  devServer: {
    open: true
  },
  output: {
    library: "lava",
    filename: "lava.min.js",
    libraryTarget:'window',
    path: __dir(isDevServer ? "build" : "dist"),
  },
  plugins: [
    ...[
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin({
        eslint: true
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          tslint: {
            emitErrors: true,
            failOnHint: true
          }
        }
      })
    ],
    ...(isDevServer ? devPlugins : [])
  ],
  module: {
    rules: [
      {
        test: /.(ts|tsx)?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
        options: { transpileOnly: true }
      },
      {
        test: /LavaJs\.ts$/,
        loader: "string-replace-loader",
        options: {
          search: "__VERSION__",
          replace: require("./package.json").version,
          strict: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
