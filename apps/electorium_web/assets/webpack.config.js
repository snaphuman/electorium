const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
      app: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../priv/static/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
          test: /\.vue$/,
          use: 'vue-loader'
      }
    ]
  },
  resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'js')],
      extensions: ['.js', '.vue', '.css'],
      alias: {
          '@': resolve('src')
      }
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/app.css' }),
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
    new VueLoaderPlugin()
  ]
});
