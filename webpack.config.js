const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "TS Webpack",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.(js|jsx|tsx|ts)$/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
          // https://github.com/facebook/create-react-app/issues/3225
          plugins: [
            "transform-custom-element-classes",
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
  },
};
