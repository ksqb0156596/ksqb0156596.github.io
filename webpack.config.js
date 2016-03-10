/**
 * Created by Administrator on 2016/3/7.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件
    plugins:[commonsPlugin],
    //页面入口
    entry:{
        main:'./src/js/main.js'
    },
    //出口
    output:{
        path:'./bin/js',
        filename:'[name].js'
    },
    //配置加载器,配置每个文件类型的处理方式，这里使用react的jsx
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.css/,
                loader: "style!css"
            },
            {
                test: /\.jpg/,
                loader: "file-loader?name=../images/[name].[ext]"
            },
            {
                test: /\.png/,
                loader: "file-loader?name=../images/[name].[ext]"
            }
        ]
    },
    resolve: {
        //查找module的话从这里开始查找
        root: 'E:/ksqb0156596.github.io', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            //AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
        }
    }


}