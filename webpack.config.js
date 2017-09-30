const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HTMLWebpackPlugin({
    //this plugin allow us to not create index.html file
    //it gonna create index.html into build folder
    template: 'public/index.html'
  })]
};