var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve('./');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// var htmlWebpackPlugin =  require('html-webpack-plugin');
var common = require('./commonConfig')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

common.output.filename ='js/[name].[hash].js',
common.output.chunkFilename ='js/[name].[hash].js'

// loaders


// 插件
common.plugins = (common.plugins || []).concat([
      
    // 多线程压缩
    new ParallelUglifyPlugin({
        // 支持es6打包
        uglifyES: {
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
])
common.devtool = false



module.exports = common