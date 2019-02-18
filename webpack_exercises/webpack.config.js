const webpack = require("webpack");

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
    module: {
        loaders: [{ // using babel to some finction in emascript
            test: /.js?$/, //load any file with extension js
            loader: 'babel-loader',
            exclude: /node_modules/,// loader not read files from node modules
            query: {
                presets: ['es2015'] // what preset i wanna apply in project (typescript, react...) 
            }

        }]
    }
}