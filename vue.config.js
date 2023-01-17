const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        scss: {
          additionalData: '@import "~@/assets/styles/scss/_variables.scss";'
        }
    }
  },
  configureWebpack: {
    resolve: {
        alias: {
            '@admin': path.resolve(__dirname, 'src/modules/Admin/'),
            '@landing': path.resolve(__dirname, 'src/modules/Landing/'),
            '@': path.resolve(__dirname, 'src/'),
        }
    }
  } 
})