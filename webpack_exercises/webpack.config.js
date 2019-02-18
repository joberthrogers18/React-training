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
    }
}