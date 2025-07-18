const path = reuire("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__direname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      (test = /\.ts$/),
      (exclude = /node_modules/),
      (use = {
        loader: "ts-loader",
      }),
    ],
  },
};
