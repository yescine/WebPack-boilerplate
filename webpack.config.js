const path = require('path');

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
            lodaer:'babel-loader',
            exclude:/node_module/
         }
      ]
   }
};