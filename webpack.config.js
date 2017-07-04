const path = require('path');
const webpack = require('webpack');

const styles = require('./webpack.config_styles.js');
const images = require('./webpack.config_images.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: 'src/index.ejs'
});

const isproduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    //sourceMapFilename: "sourcemaps/[file].map"
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use:[
                    {
                        loader: 'babel-loader',
                        options:{
                            cacheDirectory: true,
                        } 
                    }
                ]
            },
            styles.rule,
            images.rule,
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.ejs$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: isproduction
                    }
                }],
            }
        ] //rules
    }, //module
    resolve:{
        alias:{
            'images': path.resolve(__dirname, 'src/assets/images'),
            'fonts': path.resolve(__dirname, 'src/assets/fonts')
        }
    },
    //devtool: "eval-source-map",
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        inline: true
    },
    plugins: [
        htmlPlugin,
        styles.plugin,
        new webpack.HotModuleReplacementPlugin()

    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
    ]
};
