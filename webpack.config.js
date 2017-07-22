var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist/');
var APP_DIR = path.resolve(__dirname, './client/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ],
        },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets : ['es2015', 'react']
        }

      },
        { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
            , loader: 'url-loader?limit=100000&name=[name].[ext]'
        }
    ]
  }
};

module.exports = config;