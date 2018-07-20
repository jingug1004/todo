const swaggerGen = require('swagger-vue')
const jsonData = require('../../node_modules/swagger-vue/example/api-docs.json')
const fs = require('fs')
const path = require('path')

let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
const codeResult = swaggerGen(opt)
fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
// fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)


// C:\Users\Emiya\vue\vue-to\node_modules\swagger-vue\example\api-docs.json
