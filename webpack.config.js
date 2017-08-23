/**
 * Created by rowland on 8/7/16.
 */
module.exports = {
  entry: './main.js',
  devServer: {
    stats: 'error-only',
    inline: true,
    port: 3333
  },
  output: {
    path: './',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
