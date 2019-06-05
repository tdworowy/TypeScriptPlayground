const path = require('path');
module.exports = {
    entry: { app:  "./app/index.tsx",
             test: "./test/react.app.tests.tsx",
             e2e:  "./test/e2e/react.app.e2e.tests.tsx"
            },
    output: {
      path: path.resolve(__dirname+ '/dist'), filename: '[name].js' 
    },
    devtool: "source_map",
    resolve: {
        extensions : [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        noParse: [/.+?(node_modules)/, /node_modules/],
        rules: [
          { test: /\.tsx?$/, 
            exclude: [/.+?(node_modules)/, /node_modules/],
            loader: "ts-loader"
          },
          {
           test: /\.js$/, 
           exclude: [/.+?(node_modules)/, /node_modules/],
           enforce: "pre",
           loader: "source-map-loader"
          }
        ]
      },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

}