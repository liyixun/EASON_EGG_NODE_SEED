'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549505982301_5536';

  // add your config here
  config.middleware = [];
  config.security = { // 先去除csrf安全策略
    csrf: {
      enable: false,
    }
  };
  config.redis = {
        client: {
            port: 6379,          // Redis port
            host: '127.0.0.1',   // Redis host
            password: 'auth',
            db: 0,
        }
  };
  return config;
};
