const path = require('path')

module.exports = {
  entry: './assets/javascript/dev-main.js', // everything will merge into a single main.js. If you want separate files  lets create an object. Read more at concepts/entry-points/
  resolve: {
    alias: {
      './fonts/bootstrap-icons.woff': path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff'),
      './fonts/bootstrap-icons.woff2': path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2')
    }
  },
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
        use: ['sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // fonts not working
        type: 'asset/inline'
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|webp|tiff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      }
    ]
  }
}
