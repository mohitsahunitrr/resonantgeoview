module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.API_PROXY,
        secure: false
      },
      '/girder': {
        target: "http://localhost:8080",
        secure: false
      }
    },
    useLocalIp: true,
    public: "localhost:8080"
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('resonantgeo')
  }
}
