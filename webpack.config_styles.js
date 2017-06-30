//const path = require('path');

const isproduction = process.env.NODE_ENV === 'production';
const isdevbuild = process.env.NODE_ENV === 'devbuild';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].style.css',
    disable: !(isproduction || isdevbuild)
});

var rule = {
    //REVIEW: 2017-06-28 Disable sourcemap?
    test: /\.s?[c|a]ss$/,//REVIEW: 2017-06-28  check regex is correct
    use: extractSass.extract({
        use: [{
            loader: 'css-loader',
            options: {
                sourceMap: true,
                minimize: isproduction
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                //(loader)
                plugins: () => [
                    require('autoprefixer')('last 3 versions', '>1%')
                ],
                sourceMap: true
            }
        },
        {
            loader: 'resolve-url-loader'
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
        ],
        fallback: 'style-loader'
    }) //extractSass
}; //.scss rule

module.exports.rule = rule;
exports.plugin = extractSass;
