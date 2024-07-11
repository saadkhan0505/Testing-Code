const webpack = require('webpack');

module.exports = {
  // other configuration options...
  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
    },
    alias: {
        process: "process/browser"
     } 
  },
  
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
