var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve('./');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var common = require('./commonConfig')
var dev = {
    devServer: {
        hot: true,
        inline: true,
        port : 8090,
        host : '0.0.0.0',
        disableHostCheck: true
    },
};

module.exports = Object.assign(common,dev)
