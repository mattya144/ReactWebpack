const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //最初に見るファイルを指定
  entry: path.join(__dirname, "src/public", "index.tsx"),
  //出力されたファイル設定
  output: {
    //出力されるファイル名
    filename: "bundle.js",
    //出力されるディレクトリ名(build)と場所(dirname/場所)
    path: path.resolve(__dirname, "build"),
    //ディレクトリが出力される前にそれを新しくする
    clean: true,
  },
  plugins: [
    //htmlを扱えるようにするプラグイン
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        //扱うファイル
        test: /\.tsx?$/,
        //ファイルに対して何かをする
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".tsx", ".js"],
  },
  stats: {
    errorDetails: true,
  },
};
