const path = require('path')

module.exports = {
  entry: './assets/javascript/dev-main.js', // everything will merge into a single main.js. If you want separate files  lets create an object. Read more at concepts/entry-points/
  output: {
    clean: true, // Clean the output directory before emit.
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: []
      },
      {
        test: /\.scss$/,
        type: 'asset/resource',
        generator: {
          filename: 'bundle.css'
        },
        use: ['style-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg'
        }
      }
    ]
  }
}
