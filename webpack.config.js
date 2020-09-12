const path = require("path");
// ⇂ for html templating
const HtmlWebpackPlugin = require("html-webpack-plugin");
// ⇂ to cleanup after build
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// ⇂ to uglify and reduce bundle size
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    app: "./app.svelte",
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
      three$: path.resolve("./src/three.exports.js"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  mode: "development",
  output: {
    filename: "[name].webpacked.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "SIDIOUSVIC'S WWW OF DOOM",
      template: "./ui/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: "svelte-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.obj$/, // 3D model files
        use: ["file-loader"],
      },
    ],
  },
};
