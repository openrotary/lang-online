module.exports = {
    chainWebpack: config => {
        config.module.rule('tea')
            .test(/\.tea$/)
            .use('tea-loader')
            .loader('tea-loader')
            .end()
    }
}