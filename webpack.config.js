const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
  // mode: 'development', // so that the resulting files are not minified (alternative 'production')
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: []
      },
      {
        test: /\.s[ac]ss$/i,
        // type: 'asset/resource', // type creates a separate file, which makes it impossible to get the fonts
        /* generator: {
          filename: 'bundle.css' // now all styles are in javascript, the file is not created
        }, */
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' // check for which mode we work
            ? 'style-loader' // Creates `style` nodes from JS strings, for development it is faster to have style in JS
            : MiniCssExtractPlugin.loader,
          'css-loader', // Translates CSS into CommonJS
          'sass-loader' // Compiles Sass to CSS
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          // outputPath: 'fonts/', // this value is not included in the final file path
          filename: 'fonts/[hash][ext][query]'
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
