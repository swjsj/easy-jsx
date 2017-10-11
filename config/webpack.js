const { join } = require('path');
const path = require('path')
const ExtractText = require('extract-text-webpack-plugin');
const babelOpts = require('./babel');
const styles = require('./styles');
const setup = require('./setup');

const dist = join(__dirname, '..', 'dist');
const exclude = /(node_modules|static)/;

var _package = require('../package');

module.exports = env => {
	const isProd = env && env.production;

	if (isProd) {
		babelOpts.presets.push('babili');
	} else {
		styles.unshift({ loader: 'style-loader' });
	}

	return {
		entry: {
			index: './src/index.js',
			// vendor: [
			// 	// pull these to a `vendor.js` file
			// 	// 'preact',
			// 	// 'style-loader',
			// 	// 'preact-router',
			// 	//'css-loader'
			// ]
		},
		output: {
			path: dist,
			filename: '[name].js',
			publicPath: '/',
			//filename: _package.name + '.js',
			library: 'EasyJSX',
			libraryTarget: 'umd',
			umdNamedDefine: true,
			//path: path.resolve(__dirname, './bundle')
		},
		resolve: {
			alias: {
				// Run `npm install preact-compat --save`
				// 'react': 'preact-compat',
				// 'react-dom': 'preact-compat'
			},
			modules: [__dirname, 'node_modules']
		},
		externals: {
			// preact:true,
			// "preact-router":true
		},
		module: {

			noParse: [/src\/static/, /dist/],
			rules: [{
				test: /\.jsx?$/,
				exclude: exclude,
				loader: {
					loader: 'babel-loader',
					options: babelOpts
				}
			},
			{
				test: /.\.less$/,
				use: [
					'style-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('autoprefixer')
								];
							}
						}
					},
					'less-loader' //使用less或者sass时不用为@import的less/sass添加importLoaders:1因为自动添加
				]
			}
			]
		},
		plugins: setup(isProd),
		devtool: !isProd && "eval-source-map",
		devtool: "eval-source-map",
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd,
			stats: {
				colors: true,
				hash: false,
				version: false,
				timings: true,
				assets: false,
				chunks: false,
				modules: false,
				reasons: false,
				children: false,
				source: false,
				errors: true,
				errorDetails: false,
				warnings: true,
				publicPath: false
			}
		},
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000,
			ignored: [/node_modules/, /src\/static/]
		},
		node: {
			fs: "empty"
		}
	};
};
