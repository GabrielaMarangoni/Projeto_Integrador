const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      mode: 'development',
      entry: path.resolve(__dirname, 'index.jsx'),
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js'
     },
     resolve: {
         extensions: ['.js', '.jsx', '.png'],
     },
     devServer: {
            contentBase: path.resolve(__dirname, 'public')
     },
     plugins: [
          new HtmlWebpackPlugin({
                  template: path.resolve(__dirname, 'public', 'index.html')
          })
     ],
     module: {
           rules: [
                {
                        test: /\.(png|jpg|gif)$/i,
                        use: [
                          {
                            loader: 'url-loader',
                            options: {
                              limit: 8192
                            }
                          }
                        ]
                      },
                   
                 {
                        test: /\.jsx$/,
                        exclude: /node_modules/,
                        use: 'babel-loader'
                },
                {
                        test: /\.css$/,
                        exclude: /node_modules/,
                        use: ['style-loader', 'css-loader'],
                },
                {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: path.resolve(__dirname, "node_modules")
                    }
          ]
          
     }
}