/**
 * webpack 基础Core配置
 */
import { CWD, BUILD, CWD_NODE_MODULES, NODE_MODULES, SOURCE_PATH, STATIC_PATH } from './path';
import { IS_PRODOCTION } from './env';
import babelConfig from './babel';
import themeConfig from './../theme';
import entrys from './entry';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/**
 * Babel 配置
 */
const babelLoader = `babel-loader?${JSON.stringify(babelConfig)}`;

/**
 * Webpack Encty
 */
const webpackEntry = {};
entrys.forEach((entryName) => {
  webpackEntry[entryName] = path.resolve(SOURCE_PATH, `${entryName}/index.tsx`);
});

//生产环境默认关闭SourceMap
const sourceMapEnable = IS_PRODOCTION ? false : true

export class WebpackConfig {
  cache = true
  devtool = sourceMapEnable ? 'source-map' as 'source-map' : false
  entry = entrys
  output = {
    path: BUILD,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js',
    publicPath: ''
  }
  resolve = {
    //定义从package.json 的什么字段上去读入口文件
    mainFields: ['jsnext:main', "browser", "module", "main"],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.join(CWD, 'src'),
      CWD_NODE_MODULES,
      NODE_MODULES
    ],
    alias: {

    }
  }
  externals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'lodash': '_',
    'axios': 'axios'
  }
  module = {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: IS_PRODOCTION ? [babelLoader, 'ts-loader?logLevel=error'] : ['react-hot-loader/webpack', babelLoader, 'ts-loader?logLevel=error']
      },
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/,
        loader: babelLoader
      },
      {
        enforce: ('pre' as 'pre'),
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: sourceMapEnable,
              minimize: true
            }
          }, {
            loader: 'postcss-loader'
          }]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // activate source maps via loader query
            {
              loader: 'css-loader',
              options: {
                sourceMap: sourceMapEnable,
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: sourceMapEnable,
                //传入全局的样式配置
                modifyVars: themeConfig
              }
            }
          ]
        })
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: '10000',
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/svg+xml'
        }
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[hash:16].[ext]'
        }
      }
    ]
  }
  plugins = [
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: !IS_PRODOCTION }),
    //https://webpack.js.org/plugins/commons-chunk-plugin/#components/sidebar/sidebar.jsx
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
}
