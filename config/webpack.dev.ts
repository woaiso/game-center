import { WebpackConfig } from './webpack.core';
import { CWD, SOURCE_PATH, STATIC_PATH } from './path';
import { NODE_ENV, IS_PRODOCTION } from './env';
import entrys from './entry';

/**
 * 开发环境的Webpack配置
 * @version 1.0.1
 * @author woaiso@woaiso.com
 * @github woaiso.github.com
 */
const path = require('path');
const webpack = require('webpack');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin;
const merge = require('webpack-merge');

class WebpackDev {
  devServer = {
    contentBase: path.join(CWD, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    quiet: false,
    stats: {
      // Add asset Information
      assets: true,
      // Sort assets by a filed
      assetsSort: 'field',
      // Add information about cached (not built) modules
      cached: false,
      // Add children information
      children: false,
      // Add chunk information (setting this to `false` allows for a less verbose output)
      chunks: false,
      // Add built modules information to chunk information
      chunkModules: false,
      // Add the origins of chunks and chunk merging info
      chunkOrigins: false,
      // Sort the chunks by a field
      chunksSort: 'field',
      // Context directory for request shortening
      context: '../src/',
      // Add errors
      errors: true,
      // Add details to errors (like resolving log)
      errorDetails: true,
      // Add the hash of the compilation
      hash: true,
      // Add built modules information
      modules: false,
      // Sort the modules by a field
      modulesSort: 'field',
      // Add public path information
      publicPath: false,
      // Add information about the reasons why modules are included
      reasons: false,
      // Add the source code of modules
      source: false,
      // Add timing information
      timings: false,
      // Add webpack version information
      version: false,
      // Add warnings
      warnings: false
    },
    // __proxy: {
    // 	'/api/jmstore/**': {
    // 		target: 'http://new.jmstore.jmrd.com',
    // 		secure: false,
    // 		changeOrigin: true,
    // 		pathRewrite: { '^/api/jmstore': '' },
    // 		onProxyReq: (proxyReq, _req, _res) => {
    // 			proxyReq.setHeader('Cookie', 'PHPSESSID=qh3gqsj7128ogftm9l43v5l9a5; IS_VIRTUAL=MANAGEMENT');
    // 		}
    // 	},
    // 	'/Image': {
    // 		target: 'http://new.jmstore.jmrd.com',
    // 		secure: false,
    // 		changeOrigin: true,
    // 		onProxyReq: (proxyReq, _req, _res) => {
    // 			proxyReq.setHeader('Cookie', 'PHPSESSID=qh3gqsj7128ogftm9l43v5l9a5; IS_VIRTUAL=MANAGEMENT');
    // 		}
    // 	},
    // 	'/static': {
    // 		target: 'http://new.jmstore.jmrd.com',
    // 		secure: false,
    // 		changeOrigin: true
    // 	}
    // }
  }

  /**
   * webpack插件
   *
   * @memberOf WebpackDev
   */
  plugins = [
    new HotModuleReplacementPlugin(),
    // https://github.com/MoOx/eslint-loader#noerrorsplugin
    new NoEmitOnErrorsPlugin()
  ]

}
//核心配置
const coreConfig = new WebpackConfig();
//开发环境配置
const devConfig = new WebpackDev();
const config = merge(coreConfig, devConfig);
export default config;
