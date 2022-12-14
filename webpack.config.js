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
  devServer: {
    static: path.resolve(__dirname, './'), // leave the original index file in the root of the project and the path to it until you make an html build
    port: 8080,
    hot: true
  },
  mode: 'development', // so that the resulting files are not minified (alternative 'production')
  module: {
    rules: [
      {
        test: /\.js$/,
        use: []
      },
      {
        test: /\.s[ac]ss$/i,
        // type: 'asset/resource', // type creates a separate file, which makes it impossible to get the fonts
        generator: {
          filename: 'bundle.css' // now all styles are in javascript, the file is not created
        },
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader' // Compiles Sass to CSS
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // fonts not working
        type: 'asset/resource',
        generator: {
          // outputPath: 'fonts/', // how to force styles to look in this folder?
          filename: '[name].[ext]'
        }
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
