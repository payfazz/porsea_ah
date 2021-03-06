// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const fs = require("fs");
const path = require("path");
const LOCATION = require("../../utils/location");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CircularDependencyPlugin = require("circular-dependency-plugin");

var config = {
  mode: "development",
  name: "client",
  entry: {
    addon: ["@babel/polyfill"],
    main: path.resolve(LOCATION.PORSEA_DIRECTORY, "./src/index.js")
  },
  output: {
    path: path.resolve(LOCATION.CURRENT_TERMINAL_PATH, "build"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              ["@babel/plugin-proposal-class-properties"],
              ["import", { libraryName: "antd", style: true }]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/image/[name]-[contenthash].[ext]",
            publicPath: LOCATION.PUBLIC_PATH
          }
        }
      },
      {
        test: /\.(mp3|wav|ogg|mp4|webm|mpg|mpeg|mov|wmv|swf|flv)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/media/[name]-[contenthash].[ext]",
            publicPath: LOCATION.PUBLIC_PATH
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/font/[name]-[contenthash].[ext]",
            publicPath: LOCATION.PUBLIC_PATH
          }
        }
      },
      {
        test: /\.(md)$/,
        use: {
          loader: "ignore-loader"
        }
      }
    ]
  },
  devtool: "cheap-source-map",
  optimization: {
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "async",
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        FOLDER_IN_PAGES: (() => {
          const pagesPath = path.resolve(
            LOCATION.CURRENT_TERMINAL_PATH,
            "src/pages"
          );

          const res = fs.readdirSync(pagesPath).map(folder => ({
            folderName: folder,
            isIndexJSExists: fs.existsSync(
              path.resolve(pagesPath, folder, "index.js")
            )
          }));

          return JSON.stringify(res);
        })()
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: LOCATION.INDEX_HTML_PATH
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd()
    }),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ]
};

module.exports = config;
