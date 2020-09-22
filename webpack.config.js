const path = require('path');
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
   mode:'development',
   entry:'./src/index.js',
   output:{
      path:path.resolve(__dirname,'dist'),
      filename:'bundle.js',
      publicPath:''
   },
   devtool:'cheap-module-eval-source-map',
   module:{
      rules:[
         {
            test:/\.js$/, // all file with .js
            loader:'babel-loader',
            exclude:/node_module/
         },
         {
            test:/\.css$/, // all file with .js
            exclude:/node_module/,
            use:[
               {loader:'style-loader'},
               {loader:'css-loader',options:{
                  importloader:1,
                  modules:{
                     localIdentName:'[name]__[local]__[hash:base64:5]'
                  }
               }},
               {loader:'postcss-loader',
                  options:{
                     ident:'postcss',
                     plugins:()=>[autoprefixer()]
                  }
               }
            ]
         },
         {
            test:/\.(png|jpe?g|gif)$/,
            loader:'url-loader?limit=8000&name=image/[name].[ext]'
         }
      ]
   },
   plugins:[
      new htmlWebpackPlugin({
         template:__dirname+'/src/index.html', // usually inside public folder
         filename:'index.html',
         inject:'body'
      })
   ]
};