var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve('./');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// var htmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./src/index.js"
    ],
    output: {
        path: BUILD_PATH,
        filename: "bundle.js"
    },
    
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.js$/, 
                loader:'react-hot-loader/webpack',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders:  ['style-loader', 'css-loader' ]
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json'],
        alias: {
            STATIC: path.join(APP_PATH, '/Static'),
        }
    },
    devServer: {
        hot: true,
        inline: true,
        port : 8090,
        host : '0.0.0.0',
        disableHostCheck: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};
