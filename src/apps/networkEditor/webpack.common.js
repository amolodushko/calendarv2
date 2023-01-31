const { mergeWithRules } = require('webpack-merge');
const resolve = require('path').resolve;
const common = require('../../../webpack.common');

const config = {
    devtool: 'source-map',
    entry: resolve(__dirname, './index.tsx'),
    output: {
        assetModuleFilename: 'images/[contenthash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|jpe?g|woff|woff2|eot|ttf)$/i,
                type: 'asset/resource',
            }
        ]
    },
}

module.exports = mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: {
                loader: "match",
                options: "replace"
            }
        }
    }
})(common, config);
