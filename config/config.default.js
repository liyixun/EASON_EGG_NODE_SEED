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
  return config;
};
