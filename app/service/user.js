const Service = require('egg').Service;

class UserService extends Service {
    async findUserEmail(email) {
        let sql = "select * from users where email = ?";
        return await this.ctx.service.common.mysqlQuery(sql, [email]);
    }
    async queryProvinceByProvinceName(param) {
        let queryCondition = {
            "province": param.province
        };
        return await this.ctx.service.common.mongooseFind('province', queryCondition, param.pageNum, param.pageSize);
    }
    async insertProvince(param) {
        return await this.ctx.service.common.mongooseInsert('province', param);
    }
    async updateProvince(param) {
        return await this.ctx.service.common.mongooseUpdate('province', param.queryCondition, param.updateCondition);
    }
    async deleteProvince(param) {
        return await this.ctx.service.common.mongooseDelete('province', param);
    }
}

module.exports = UserService;
