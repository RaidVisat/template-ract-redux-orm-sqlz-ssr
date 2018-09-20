module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    node: {
        setImmediate: false,
        fs: 'empty',
        dgram: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
        module: 'empty'
    }/*,
    stats: {
        warnings: false,
        assetsSort: '!size',
        children: false,
        chunks: false,
        colors: true,
        entrypoints: false,
        modules: false
    }*/
};
