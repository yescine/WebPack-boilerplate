const path = require('path');
const autoprefixer = require('autoprefixer')
module.exports ={
   mode:'developement',
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
               {loader:'css-loader',option:{
                  importloader:1,
                  modules:{
                     localIdentName:'[name]__[local]__[hash:base64:5]'
                  }
               }},
               {loader:'postcss-loader',option:{
                  ident:'postcss',
                  plugin:()=>[autoprefixer()]
               }}
            ]
         },
         {
            test:/\.(png|jpe?g|gif)$/,
            loader:'url-loader?limit=8000&name=image/[name].[ext]'
         }
      ]
   }
};