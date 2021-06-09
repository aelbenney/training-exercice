const path = require('path');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

const config = merge(webpackCommonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "/exo-todo-list/fonts/[name].[ext]",
            emitFile: false
          }
        }
      }
    ]
  },
  entry: {
    todolist: './src/main/webapp/vue-app/todo-list.js',
  },
  output: {
    path: path.join(__dirname, 'target/exo-todo-list/'),
    filename: 'js/[name].bundle.js'
  },
  externals: {
    vue: 'Vue',
    vuetify: 'Vuetify',
    jquery: '$'
  }
});

module.exports = config;