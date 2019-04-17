const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
  entry : './main.js',
  output : {
    path : path.join(__dirname,'dist'),
    filename : 'bundle.js'
  },
  devServer : {
    port : 44444,
    hot : true,
    compress: true,
    contentBase : path.join(__dirname,'src')
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'myApp',
      template :path.join(__dirname,'/src/index.html'),
      filename : 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module : {
    rules : [
      { test : /\.css$/, use : ['style-loader','css-loader'] },
      {
        test : /\.(jpg|png|gif|jpeg)$/,
        loader : 'file-loader',
        options : {
          name : '[name].[ext]?[hash]'
        }
      },
      {test : /\.vue$/,use:['vue-loader']},
      {
        test : /\.js$/,
        exclude:/.*node_modules.*/,
        loader : 'babel-loader',
      }
    ]
  },
  // 添加vue的解析别名的指向
  resolve : {
    alias : {
      'vue$' : 'vue/dist/vue.esm.js'
    }
  }
}
