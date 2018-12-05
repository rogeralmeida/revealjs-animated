const path = require('path');

module.exports = {
  entry: './src/revealjs-animated.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'revealjs-animated.js'
  }
};