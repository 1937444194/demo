export default {
  proxy: {
    '/dev': {
      target: 'https://picurl.cn/',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/dev': ''
      },
    },
  },
}
