const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: false,
      preload: 'src/preload.js',
      builderOptions: {
        fileAssociations: [{
          ext: 'dms',
          name: 'DMS container',
          description: 'DashDMS files'
        }],
        productName: 'DashDMS',
        appId: 'dev.frank-giger.dashdms',
        win: {
          icon: 'public/favicon.ico'
        },
        asar: true
      }
    }
  }
})
