// vue.config.js

module.exports = {
  assetsDir: "./",
  publicPath: "/lang-online/",
  chainWebpack: config => {
    config.module
      .rule("tea")
      .test(/\.tea$/)
      .use("tea-loader")
      .loader("tea-loader")
      .end();
  }
};
