/**
 * Created by rowland on 8/7/16.
 */
module.exports = {
  entry: './main.js',
  
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    stats: 'error-only',
    inline: true,
    port: 3333
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }]
  }
};
