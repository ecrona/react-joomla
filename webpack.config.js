var path = require('path');
var webpack = require('webpack');

var config = {
    entry: ['./public/components/com_cars/assets/app.tsx'],
    output: {
        path: path.resolve(__dirname, './public/components/com_cars/assets/build'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }],
        noParse: /validate\.js/
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

module.exports = config;