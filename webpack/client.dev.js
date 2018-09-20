const {resolve} =require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./client.common');
//const webpackNodeExternals = require('webpack-node-externals');
const clientConfig = merge(common,{
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'react-hot-loader/patch',
        resolve(__dirname,'../src/client/index.js')
    ],
    output: {
        filename: 'mainClient.js',
        chunkFilename: 'mainClient.js',
        path: resolve(__dirname,'../dist-dev/client'),
        publicPath: '/',
    },
    //externals: [webpackNodeExternals()],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

});

module.exports = clientConfig;
