const webpack = require ('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css file to apply process with style loader

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        contentBase: './public',
        port: 8080
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: { //alias for directorie node_modules, jquery
            modules : __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({ //references for jquery, because the adiminlte is use strongfully  with jquery
            $: 'jquery', // $ -> jquery
            jQuery: 'jquery', // jQUery -> jquery 
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css') //css final in all application
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/', //not compile the node_modules directory,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader:ExtractTextPlugin.extract('style-loader', 'css-loader') 
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/, //font icons loader
            loader: 'file'
            
        }]
    }
}