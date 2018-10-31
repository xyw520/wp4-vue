const path = require('path');
let webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
 
module.exports = {
    entry: './src/index.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'js/bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
