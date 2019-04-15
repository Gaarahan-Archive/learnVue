const path  = require('path');
// 启用html-webpack-plugin,将页面也托管到内存
const htmlWebpackPlugin = require('html-webpack-plugin');
// 启动模块热替换(无需刷新整个页面)
const webpack = require('webpack');

module.exports = {
  // 定义入口文件
  entry : './main.js',

  // 定义出口文件
  output : {
    path : path.join(__dirname,'/dist'),
    filename : 'bundle.js'
  },

  // 设置为开发模式
  mode : 'development',

  module : {
    // 配置文件的解析loader
    rules : [
      { test : /\.css$/, use: ['style-loader','css-loader'] },
      // babel的使用
      // npm install -D babel-loader @babel/core @babel/preset-env
      // exclude 选项表示排除 
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      { 
        test : /\.(jpg|png|gif|svg)$/,
        loader : 'file-loader',
        options : {
          name : '[name].[ext]?[hash]'
        }
      }
    ]
  },

  // 配置webpack-dev-server
  devServer : {
    port : 63636,
    contentBase : path.join(__dirname,'/src'),
    compress : true,
    // 启动模块热替换(无需刷新整个页面)
    hot : true
  },

  // 定义插件
  plugins : [
    // 启动模块热替换(无需刷新整个页面)
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new htmlWebpackPlugin({
      template : path.join(__dirname,'./src/index.html'),
      filename : 'index.html'
    })
  ]
}
