const path = require('path');

module.exports = {
  entry: './src/revealjs-animated.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'revealjs-animated.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  }
};