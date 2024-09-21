const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/main/main.js",
    target: "electron-main",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: {
      fsevents: "require('fsevents')",
    },
  },
  {
    mode: "development",
    entry: "./src/renderer/index.js",
    target: "electron-renderer",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "renderer.js",
      assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/renderer/index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  },
];
