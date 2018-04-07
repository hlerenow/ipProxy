let debug = require('debug')('ipProxy:getRedis')
let redis = require('redis')
let {redisIP, redisPort} = require(`${SHORT_PATH.root}/config.js`)
debug(redisIP, redisPort)

/**
 * 获取redis连接
 * @return {[type]} [description]
 */
exports.getRedisConnector = function () {

}