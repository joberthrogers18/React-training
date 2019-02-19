const webpack = require("webpack");
const ExtractTextPlugin =  require("extract-text-webpack-plugin"); //using to read files css

module.exports = {
    entry: './ex/index.js', // entry file for start aplication
    output: {
        path: __dirname + '/public', // path from the output file with name bundle.js
        file: './bundel.js'
    },
    devServer: {
        port: 8080, // port load
        contentBase: './public' // where is the file which will go loading
    },
    plugins: [
        new ExtractTextPlugin('app.css') //file css with the processor of bundle
    ],
    module: {
        loaders: [{ // using babel to some finction in emascript
            test: /.js?$/, //load any file with extension js
            loader: 'babel-loader',
            exclude: /node_modules/,// loader not read files from node modules
            query: {
                presets: ['es2015', 'react'], // what preset i wanna apply in project (typescript, react...) 
                plugins: ['transform-object-rest-spread'] //plugin for aplication uderstand the operator spread
            }

        }, {
            test: /\.css$/, //references to all files css
            loader: ExtractTextPlugin.extract("style-loader", "css-loader") //
        }]
    }
}