module.exports = {
  entry: './vue-src/main.js',
  output: {
    path: './views',
    publicPath: 'views/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        //loader: 'babel!eslint',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      }
    ]
  },
  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your .eslintrc
  vue: {
    loaders: {
      //js: 'babel!eslint'
      js: 'babel'
    }
  }
};
