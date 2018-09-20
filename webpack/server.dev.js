const {resolve} =require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./server.common');
const webpackNodeExternals = require('webpack-node-externals');
const serverConfig = merge(common,{
    name: 'server',
    mode: 'development',
    devtool: 'eval',
    target: 'node',
    entry: [
        resolve(__dirname,'../src/server/index.js')
    ],
    output: {
        libraryTarget: 'commonjs2',
        filename: 'mainServer.js',
        chunkFilename: 'mainServer.js',
        path: resolve(__dirname,'../dist-dev/server'),
        publicPath: '/',
    },
    externals: [webpackNodeExternals()]
});

module.exports = serverConfig;
