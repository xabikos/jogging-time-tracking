﻿var path = require('path');

module.exports = {
    context: path.join(__dirname, 'Scripts/build'),
    entry: {
        app: './app'
    },
    output: {
        path: path.join(__dirname, 'Scripts/build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
          // Transform JSX in .jsx files, ES6 code to ES5 using Babel
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    },
    externals: {
      // Use external version of React (from CDN for client-side, or bundled with ReactJS.NET for server-side)
      react: 'React',
    }
};