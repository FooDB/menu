const webpack = require('webpack');
const path = require('path');

const common = {
  context: __dirname + '/client',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  }
};

const client = {
  entry: './client/client.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
};

const server = {
  entry: './client/server.js',
  target: 'node',
  output: {
    path: __dirname + '/public',
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];

// module.exports = {
//   context: __dirname + '/client',
//   entry: './index.js',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'env']
//         }
//       },
//       {
//         test: /\.css/,
//         loaders: ['style-loader', 'css-loader']
//       }
//     ]
//   },
//   output: {
//     path: __dirname + '/public',
//     filename: 'bundle.js'
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.jsx', '.js']
//   },
// };

