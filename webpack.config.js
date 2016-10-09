module.exports = {
  entry: [
    'src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    resolve: { modulesDirectories: ['node_modules', 'src'], extension: ['', '.js', '.jsx'] }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
