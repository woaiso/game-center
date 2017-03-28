/**
 * 线上和测试运行环境的Webpack配置
 * @version 1.0.1
 * @author woaiso@woaiso.com
 * @github woaiso.github.com
 */

import { WebpackConfig } from './webpack.core';
const path = require('path');
const webpack = require('webpack');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const NoErrorsPlugin = webpack.NoErrorsPlugin
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

import { CWD, SOURCE_PATH, STATIC_PATH, BUILD } from './path';
import { IS_PRODOCTION, NODE_ENV } from './env';

const StatsPlugin = require('stats-webpack-plugin');

const statsPlugin = new StatsPlugin('stats.json', {
	chunkModules: true,
	exclude: [ /node_modules[\\\/]react/ ]
})

class WebpackProd {
    /**
     * webpack插件
     *
     * @memberOf WebpackDev
     */
	plugins = [
		//https://github.com/johnagan/clean-webpack-plugin
		new CleanWebpackPlugin([ BUILD ], {
			root: CWD
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"' + NODE_ENV + '"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: IS_PRODOCTION ? {
				warnings: false
			} : false
		})
	]
	stats = {
		// Add asset Information
		assets: true,
		// Sort assets by a field
		assetsSort: "field",
		// Add information about cached (not built) modules
		cached: true,
		// Add children information
		children: false,
		// Add chunk information (setting this to `false` allows for a less verbose output)
		chunks: !IS_PRODOCTION,
		// Add built modules information to chunk information
		chunkModules: false,
		// Add the origins of chunks and chunk merging info
		chunkOrigins: false,
		// Sort the chunks by a field
		chunksSort: "field",
		// Context directory for request shortening
		// `webpack --colors` equivalent
		colors: true,
		// Add errors
		errors: true,
		// Add details to errors (like resolving log)
		errorDetails: true,
		// Add the hash of the compilation
		hash: true,
		// Add built modules information
		modules: !IS_PRODOCTION,
		// Sort the modules by a field
		modulesSort: "field",
		// Add public path information
		publicPath: true,
		// Add information about the reasons why modules are included
		reasons: true,
		// Add the source code of modules
		source: true,
		// Add timing information
		timings: true,
		// Add webpack version information
		version: true,
		// Add warnings
		warnings: true
	}
}
//核心配置
const coreConfig = new WebpackConfig();
//线上和测试运行环境的Webpack配置
const prodConfig = new WebpackProd();
if(!IS_PRODOCTION){
	prodConfig.plugins.push(statsPlugin);
}
const config = merge(coreConfig, prodConfig);
export default config;
