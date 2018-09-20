const {resolve} =require('path');
const webpack = require('webpack');
const UglifyJsPlugin =require('uglifyjs-webpack-plugin');
const CompressionPlugin =require('compression-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./server.common');
const serverConfig = merge(common,{
    name: 'server',
    mode: 'production',
    target: 'web',
    devtool: 'source-map',
    entry: [
        resolve(__dirname,'../src/server/index.js')
    ],
    output: {
        libraryTarget: 'commonjs2',
        filename: 'mainServer.js',
        chunkFilename: 'mainServer.js',
        path: resolve(__dirname,'../dist/server'),
        publicPath: '/',
    },
    plugins: [
        new UglifyJsPlugin({
            parallel: true,
            extractComments: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});

module.exports = serverConfig;
