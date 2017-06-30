// const path = require('path');

// const isproduction = process.env.NODE_ENV === 'production';
// const isdevbuild = process.env.NODE_ENV === 'devbuild';

var rule = {
    test: /\.(png|svg|jpe?g|gif)$/,
    //include: [path.resolve(__dirname, "assets/images")],
    use: [
        { loader: 'file-loader' },
        {
            loader: 'image-webpack-loader'
            // query:{
            //   gifsicle:{
            //     interlaced: true,
            //     optimizationLevel: 1,
            //     colors: 256
            //   },//gifsicle
            //   mozjpeg:{
            //     quality: 60,
            //     progressive: false
            //   },//mozjpeg
            //   optipng:{
            //     optimizationLevel:5
            //   }//optipng
            // }
        }//image-webpack-loader
    ]
};

module.exports.rule = rule;
//exports.plugin = extractSass;
