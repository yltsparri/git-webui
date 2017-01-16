var path = require('path')
var webpack = require('webpack')
module.exports = function (ENV) {
  return {
    cache: false,
    debug: false,
    devtool: 'source-map',
    entry: ['containers/index.tsx'],
    target: 'web',
    output: {
      filename: '[name].js',
      publicPath: '/dist',
      path: path.resolve('dist/share/git-webui/webui/js/')
    },
    resolve: {
      extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
      modulesDirectories: ['src', 'node_modules']
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      'react-redux': 'ReactRedux'
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'tslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.tsx?$/,
          loaders: ['babel', 'ts-loader']
        }
      ]
    },
    plugins: ENV === 'production' ? [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: false
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),
      new webpack.optimize.DedupePlugin()] : []
  };
}
