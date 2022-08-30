const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist/assets/js')
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '../images/[name].[ext]' }
          }
        ]
      }
    ]
  }
};
