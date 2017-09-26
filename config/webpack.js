const { join } = require('path');
const path = require('path')
const ExtractText = require('extract-text-webpack-plugin');
const babelOpts = require('./babel');
const styles = require('./styles');
const setup = require('./setup');

const dist = join(__dirname, '..', 'dist');
const exclude = /(node_modules|bower_components)/;

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
			// 	'preact'
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
			}
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: exclude,
				loader: {
					loader: 'babel-loader',
					options: babelOpts
				}
			}, {
				test: /\.(sass|scss)$/,
				use: isProd ? ExtractText.extract({ fallback: 'style-loader', use: styles }) : styles
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
			]
		},
		plugins: setup(isProd),
		devtool: !isProd && "eval-source-map",
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd,
			
		},
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000,
			ignored: /node_modules/
		  }
	};
};
