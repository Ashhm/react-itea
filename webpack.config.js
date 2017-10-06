const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [/src/]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [/node_module/]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: [/src/]
      }
    ]
  },
  plugins: [new HTMLWebpackPlugin({
    //this plugin allow us to not create index.html file
    //it gonna create index.html into build folder
    template: 'public/index.html'
  })]
};