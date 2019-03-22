// Porsea framework
// Created by payfazz team
// If you want to contribute visit here : https://github.com/payfazz/porsea
var path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CircularDependencyPlugin = require('circular-dependency-plugin');


const rootPath = `${__dirname}/../..`;
const publicPath = '/'
const mode = process.env.NODE_ENV || "development";

var config = {
  mode: mode,
  entry: {
    addon: ["@babel/polyfill"],
    main: path.resolve(rootPath, "src/index.js")
  },
  output: {
    path: path.resolve(rootPath, "build"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
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
        test: /\.(jpg|jpeg|png|svg|gif)?$/,
        use: {
            loader: "file-loader",
            options: {
                name: "assets/image/[name]-[hash].[ext]",
                publicPath
            }
        }
      },
      {
          test: /\.(mp3|wav|ogg|mp4|webm|mpg|mpeg|mov|wmv|swf|flv)?$/,
          use: {
              loader: "file-loader",
              options: {
                  name: "assets/media/[name]-[hash].[ext]",
                  publicPath
              }
          }
      },
      {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
              loader: "file-loader",
              options: {
                  name: "assets/font/[name]-[hash].[ext]",
                  publicPath
              }
          }
      }
    ]
  },
  devtool: process.env.NODE_ENV == "development" ? "eval" : "cheap-source-map",
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
    minimize: process.env.NODE_ENV == "production",
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      })
    ],
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        cwd: process.cwd(),
    }),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(),
    new DashboardPlugin(),
  ]
};

module.exports = config;
