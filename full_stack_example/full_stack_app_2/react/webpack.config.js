module.exports = {
  entry: "./app/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};