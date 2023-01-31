const resolve = require('path').resolve;

module.exports = {
    output: {
        path: resolve(__dirname, 'bin/bin'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: '[name].chunk.js',
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        fallback: {
            fs: false
        },
        alias: {
            '@src': resolve(__dirname, './src'),
            '@common': resolve(__dirname, './src/common'),
            '@networkEditor': resolve(__dirname, './src/apps/networkEditor'),
            '@planner': resolve(__dirname, './src/apps/planner')
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    }
};
