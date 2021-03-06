var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './entry.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js|jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query:{
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}