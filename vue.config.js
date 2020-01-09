const path = require('path')
module.exports = {
    devServer:{
        "/api":{
            target:'http://39.97.33.178',
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            '@':path.join(__dirname, "./src"),
            '@api':path.join(__dirname, './src/api'),//接口
            '@assets':path.join(__dirname, './src/assets'),//weppack打包静态文件
            '@common':path.join(__dirname, './src/common'),//公共文件以及样式
            '@components':path.join(__dirname, './src/components'),//组件
            '@pages':path.join(__dirname, './src/pages'),//页面
            '@router':path.join(__dirname, './src/router'),//路由 
            '@store':path.join(__dirname, './src/store'),//vuex
            '@utils':path.join(__dirname, './src/utils'),//方法封装
        }
    }
}