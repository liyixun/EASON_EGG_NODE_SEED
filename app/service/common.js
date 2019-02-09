const Service = require('egg').Service;
const { promisify } = require('util');

class CommonService extends Service {
    /**
     * 自己封装的mysql执行方法(SELECT UPDATE INSERT DELETE 都用的这个)
     * 参考链接：https://github.com/mysqljs/mysql#readme
     * @param sql sql语句（含?占位符）
     * @param args 对应sql占位符的参数
     * @returns {Promise<*>}
     */
    async mysqlQuery(sql, args) {
        return new Promise((resolve, reject) => {
            let connection = this.ctx.mysqlConnection();
            connection.query(sql, args, (error, result, fields) => {
                if (error) {
                    reject(error);
                    console.error(error);
                }
                resolve(result);
            });
            connection.end();
        });
    }
    /**
     * 查询mongo单个collection的方法
     * @param collectionName
     * @param params
     * @returns {Promise<*>}
     */
    async mongoFind(collectionName, params) {
        return new Promise((resolve, reject) => {
            let db = this.ctx.mongoDB();
            let collection = db.collection(collectionName);
            collection.find(params).toArray((err, docs) => {
                if (err) {
                    reject(err);
                    console.error(err);
                }
                resolve(docs);
            });
        });
    }
    /**
     * 基于mongoose的查询方法
     * @param modelName
     * @param queryCondition
     * @param pageNum
     * @param pageSize
     * @returns {Promise<*>}
     */
    async mongooseFind(modelName, queryCondition, pageNum = 1, pageSize = 999999999) {
        return new Promise((resolve, reject) => {
            let model = this.ctx.helper.getMongoModel(modelName);
            let findResult = model.find(queryCondition)
               .skip((pageNum - 1) * pageSize).limit(pageSize).exec();
            resolve(findResult);
        });
    }
    /**
     * 基于mongoose的添加数据方法
     * @param modelName
     * @param data 对象或数组（支持单个、多个添加）
     * @returns {Promise<*>}
     */
    async mongooseInsert(modelName, data) {
        return new Promise((resolve, reject) => {
            let model = this.ctx.helper.getMongoModel(modelName);
            if (Array.isArray(data)) {
                model.insertMany(data, (err, small) => {
                    if (!err) {
                        resolve(true)
                    }
                });
            } else {
                model.insertMany(data, err => {
                   if (!err) {
                       resolve(true);
                   }
                });
            }
        });
    }
    /**
     * 基于mongoose的修改数据方法（修改多条）
     * @param modelName
     * @param queryCondition
     * @param updateCondition
     * @returns {Promise<*>}
     */
    async mongooseUpdate(modelName, queryCondition, updateCondition) {
        return new Promise((resolve, reject) => {
            let model = this.ctx.helper.getMongoModel(modelName);
            model.updateMany(queryCondition, updateCondition, (err, res) => {
                // "n": 1,
                // "nModified": 1,
                // "ok": 1
                if (!err) {
                    resolve(res);
                }
            });
        });
    }
    async mongooseDelete(modelName, queryCondition) {
        return new Promise((resolve, reject) => {
            let model = this.ctx.helper.getMongoModel(modelName);
            model.deleteMany(queryCondition, err => {
                if (!err) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    }
}

module.exports = CommonService;
