const webpack = require('webpack');

module.exports = {
    entry: './ex/index.jsx',
    output:{
        path: __dirname +'/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders : [{
            test: /.jsx?$/, //the ide know better that you works with react,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets : ['es2015', 'react']
            }

        }]
    }
}