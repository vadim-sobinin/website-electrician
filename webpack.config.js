const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    hot: true,
    static: {
      directory: './public',
      watch: true
    },
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
};