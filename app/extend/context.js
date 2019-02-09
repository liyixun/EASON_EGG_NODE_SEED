const mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const { promisify } = require('util');

module.exports = {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    mysqlConnection() {
        let connection = mysql.createConnection(this.app.config.mysqlConfig);
        connection.connect();   // 默认先connect，sql执行结束后end
        return connection;
    },
    mongoDB() {
        let url = this.app.config.mongodbConfig.url + '/' + this.app.config.mongodbConfig.database;
        MongoClient.connect(url, (err, db) => {
            if (err) {
               console.error('mongodb 连接错误!');
            }
            return db;
        });
    },
    mongoose() {
        let url = this.app.config.mongodbConfig.url + '/' + this.app.config.mongodbConfig.database;
        mongoose.connect(url);
        return mongoose;
    }
};
