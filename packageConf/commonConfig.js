var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve('./');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        main: ['babel-polyfill', './src/index.js'],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-router-dom',
            'axios'
        ]
        },
    output: {
        path: BUILD_PATH,
        filename: "bundle.js",
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },

    module: {
        loaders: [ 
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                },
                plugins: ["transform-es2015-arrow-functions","syntax-dynamic-import"]
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.css$/,
                loaders:  ['style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        alias: {
            STATIC: path.join(APP_PATH, '/Static'),
            UTILS: path.join(APP_PATH, '/Utils'),
        },
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity,
            filename: 'common.bundle.js',
          })
        
    ]
};