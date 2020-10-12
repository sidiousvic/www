const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/main.ts"],
  },
  resolve: {
    alias: {
      three$: path.resolve("./src/three.x.js"),
    },
    extensions: [".mjs", ".js", ".ts"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  mode,
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  devtool: prod ? false : "source-map",
  devServer: {
    contentBase: __dirname + "/build",
    proxy: {
      "/graphql": "http://localhost:9999",
    },
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ["/node_modules/", "/spiders/"],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: ["/node_modules/", "/projects/", "/spiders/"],
      },
      {
        test: /\.css$/,
        exclude: ["/node_modules/", "/projects/", "/spiders/"],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !prod },
          },
          "css-loader",
        ],
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[id].css",
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.ico",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
};
