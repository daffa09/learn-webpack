const { watch } = require('fs');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle-dev.js'
  },
  watch: true,
  devtool: false // 'agar tidak muncul fungsi eval di dalam bundle-dev.js'
}