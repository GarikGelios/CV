module.exports = {
  entry: ['./assets/stylesheets/sass/main.scss', './assets/javascript/dev-main.js'], // everything will merge into a single main.js. If you want separate files  lets create an object. Read more at concepts/entry-points/
  output: {
    clean: true, // Clean the output directory before emit.
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: []
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "bundle.css",
        },
        use: ["sass-loader"]
      }
    ]
  }
}
