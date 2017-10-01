var path = require('path')
var webpack = require('webpack')
module.exports = function (ENV) {
  return {
    cache: false,
    devtool: 'source-map',
    entry: ['./src/containers/index.tsx'],
    target: 'web',
    output: {
      filename: '[name].js',
      publicPath: '/dist',
      path: path.resolve('dist/share/git-webui/webui/js/')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      'react-redux': 'ReactRedux'
    },
    module: {
      rules: [
        {
            enforce: 'pre',
            test: /\.tsx?$/,
            loader: 'tslint-loader',
            exclude: /(node_modules)/,
        },
        {
            test: /\.tsx?$/,
            loaders: ['babel-loader', 'ts-loader'],
            exclude: /(node_modules)/
        }
    ]
    },
    plugins: ENV === 'production' ? [
      new webpack.optimize.UglifyJsPlugin({
        ie8: false,
        minimize: true,
        beautify: false,
        mangle: {
          
          keep_fnames: false
        },
        comments: false
      }),
      new webpack.optimize.DedupePlugin()] : [ 
        new webpack.LoaderOptionsPlugin({
          debug: true
        })
      ]
  };
}
