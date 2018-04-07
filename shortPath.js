let path = require('path')
var debug = require('debug')('ipproxy:shortPath');
let configPath = {
	root: './',
	routes: './routes',
	libs: './libs'
}

for (let i in configPath) {
	configPath[i] = path.resolve(__dirname, configPath[i])
}
debug(configPath)
global.SHORT_PATH = configPath