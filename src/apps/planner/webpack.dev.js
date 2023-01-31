const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public/index.html'),
            templateParameters: {
                ts: ''
            }
        })
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        static: {
            watch: true,
            directory: resolve('static'),
        },
        open: true,
        host: 'localhost',
        hot: true,
        allowedHosts: "all",
        devMiddleware: {
            publicPath: "/",
            stats: {
                modules: false,
                assets: false,
                warningsFilter: [/node_modules/]
            },
        },
    }
});
