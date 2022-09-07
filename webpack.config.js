//https://www.freecodecamp.org/news/learn-webpack-for-react-a36d4cac5060/
//https://dev.to/shivampawar/setup-react-application-using-typescript-and-webpack-2kn6

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  exclude: /node_modules/,
  loader: "ts-loader",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caravaneer 3",
      template: "public/index.html",
      favicon: "public/favicon.ico", //todo
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: false,
  },
};
