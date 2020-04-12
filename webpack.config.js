const path = require(`path`);

const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);


const isDev = process.env.NODE_ENV === `development`;
console.log(` >>>>>>>>>>> isDev :: `, isDev, process.env.NODE_ENV );

module.exports = {
	context: path.resolve(__dirname, `src`),
	mode: `development`,
	entry: {
		main: `./index.js`,
		analytics: `./analytics.js`,
	},
	output: {
		filename: `[name].[contenthash].js`,
		path: path.resolve(__dirname, `dist`),
	},
	resolve: {
		extensions: [`.js`, `.json`, `.png`],
		alias: {
			'@': path.resolve(__dirname, `src`),
			'@models': path.resolve(__dirname, `src/models`),
		}
	},
	optimization: {
		splitChunks: {
			chunks: `all`,
		},
	},
	devServer: {
		port: 4200,
		hot: isDev,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: `./index.html`,
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, `src/assets/favicon.ico`),
				to: path.resolve(__dirname, `dist`),
			}
		]),
		new MiniCssExtractPlugin({
			filename: `[name].[contenthash].css`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
							reloadAll: true,
						}
					}, 
					`css-loader`
				],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: [`file-loader`],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [`file-loader`],
			},
			{
				test: /\.xml$/,
				use: [`xml-loader`],
			},
			{
				test: /\.csv$/,
				use: [`csv-loader`],
			},
		],
	},
}