var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'format.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
};
