const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;
const { CONTEXT, FRONTEND_VERSION } = process.env;
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: resolve(__dirname, 'bin/bin'),
        filename: `delivery-[name]-${process.env.TS}.js`,
        chunkFilename: `delivery-[chunkhash]-${process.env.TS}.js`,
        publicPath: '/'
    },
    optimization: {
        minimizer: [
            new ESBuildMinifyPlugin({ target: 'es2015' })
        ]
    },
    module: {
        // This is a fix for the error: 'Uncaught ReferenceError: t is not defined' which is caused by webpacking WebGl
        // The fix is from here: https://github.com/mapbox/mapbox-gl-js/issues/4359
        noParse: /(mapbox-gl)\.js$/
    },
    plugins: [
        ...(process.env.PROGRESS ? [new webpack.ProgressPlugin((percentage, message, ...args) => {
            // e.g. Output each progress message directly to the console:
            // eslint-disable-next-line no-console
            console.info(percentage, message, ...args);
        })] : []),
        new webpack.DefinePlugin({
            'process.env.CONTEXT': JSON.stringify(CONTEXT || 'prod'),
            'process.env.NODE_ENV': JSON.stringify('production'),
            'FRONTEND_VERSION_NUM': JSON.stringify(FRONTEND_VERSION)
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './index.html'),
            filename: `./index.delivery.html`,
            templateParameters: {
                ts: process.env.TS
            }
        })
    ]
});
