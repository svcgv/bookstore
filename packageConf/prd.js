var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve('./');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// var htmlWebpackPlugin =  require('html-webpack-plugin');
var common = require('./commonConfig')

module.exports = Object.assign({},common)