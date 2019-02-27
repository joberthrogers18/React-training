const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js' 
    },
    devServer: {
        port: 8080,
        contentBase: './public' // default directory of application
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules' //alias for node modules
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css') //generate the css file final
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,   //indentify and tranpile files JS and JSX
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css?$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader') //CSS knowing
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, //process for file from font awesome and bootstrap
            loader: 'file'
        }]
    }
}