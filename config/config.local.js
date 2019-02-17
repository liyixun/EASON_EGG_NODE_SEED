'use strict';
const path = require('path');
module.exports = appInfo => {
    return {
        logger: {
            dir: path.join(appInfo.baseDir, 'logs'),
        },
        mysqlConfig: {
            host : '127.0.0.1',
            user : 'root',
            password : 'eason-root123',                      // 自己本地MySQL的密码
            database : 'EGG_NODE_SEED',                         // 自己MySQL对应数据库的名称
            port : '3306'
        },
        mongodbConfig: {
            url: 'mongodb://localhost:27017', // 自己本地MongoDB的url
            database: 'EGG_NODE_SEED'
        },
        // redis: {
        //     client: {
        //         port: 6379,          // Redis port
        //         host: '127.0.0.1',   // Redis host
        //         password: 'auth',
        //         db: 0
        //     }
        // }
    }
};

