const {resolve} =require('path');
const webpack = require('webpack');
const UglifyJsPlugin =require('uglifyjs-webpack-plugin');
const CompressionPlugin =require('compression-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./client.common');
const StatsWebpackPlugin = require('stats-webpack-plugin');
const clientConfig = merge(common,{
    name: 'client',
    mode: 'production',
    target: 'web',
    devtool: 'source-map',
    entry: [
        resolve(__dirname,'../src/client/index.js')
    ],
    output: {
        filename: 'mainClient.js',
        chunkFilename: 'mainClient.js',
        path: resolve(__dirname,'../dist/client'),
        publicPath: '/',
    },
    plugins: [
        new StatsWebpackPlugin('stats.json'),
        new UglifyJsPlugin({
            parallel: true,
            extractComments: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.json$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});

module.exports = clientConfig;
