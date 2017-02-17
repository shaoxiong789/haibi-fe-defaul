const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'firebase/app',
      'firebase/database',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // loader: 'url-loader',
        loader: "file-loader?name=img/[hash:8].[name].[ext]",
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.htc$/,
        loader: "file-loader?name=htc/[hash:8].[name].[ext]",
        options: {
          limit: 10000,
          name: 'htc/[name].[ext]?[hash]'
        }
      },
      { test: /\.css$/,loader: ExtractTextPlugin.extract({
        fallbackLoader:"style-loader", loader:"css-loader"}) }
    ]
  },
  plugins:[
      new ExtractTextPlugin('css/styles.[hash].css')
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
}
