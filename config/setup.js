const { join } = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const SWPrecache = require('sw-precache-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');
const uglify = require('./uglify');

const root = join(__dirname, '..');

module.exports = isProd => {
	// base plugins array
	const plugins = [
		//new Copy([{ context: 'src/static/', from: '**/*.*' }]),
		//new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('../manifest.json'),
		}),
		// new webpack.IgnorePlugin(/static/),
		new HTML({ template: 'src/index.html' }),
		new Copy([{ context: 'src/views/', from: '**/*.*',to:'views' }]),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
		})
	];

	if (isProd) {
		plugins.push(
			new Clean(['dist'], { root }),
			new Copy([{ context: 'src/static/', from: '**/*.*',to:'static' }]),
			new webpack.LoaderOptionsPlugin({ minimize: true }),
			new webpack.LoaderOptionsPlugin({ minimize: false }),
			new webpack.optimize.UglifyJsPlugin(uglify),
			new ExtractText('styles.[hash].css'),
			new SWPrecache({
				filename: 'service-worker.js',
				dontCacheBustUrlsMatching: /./,
				navigateFallback: 'index.html',
				staticFileGlobsIgnorePatterns: [/\.map$/]
			})
		);
	} else {
		// dev only
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		);
	}

	return plugins;
};
