const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  publicPath: '/vueTodoPage',
  outputDir: 'docs' 
})

