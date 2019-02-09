'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller{
    async login() {
        let param = this.ctx.request.body;
        if (param && param.email) {
            let userInfo = await this.ctx.service.user.findUserEmail(param.email);
            if (userInfo && userInfo.length === 1) {
                if (userInfo[0].password == param.password) {
                    this.ctx.body = '登录成功！';
                } else {
                    this.ctx.body = '密码错误!';
                }
            } else {
                this.ctx.body = '用户不存在';
            }
        } else {
            this.ctx.body = '登录失败!';
        }
    }
    async queryProvinceByProvinceName() {
        let param = this.ctx.request.body;
        if (param && param.province) {
            let queryParam = {
                province: param.province,
                pageNum: 1,
                pageSize: 10
            };
            let provinceResult = await this.ctx.service.user.queryProvinceByProvinceName(queryParam);
            this.ctx.body = provinceResult;
        }
    }
    async addProvince() {
        let param = this.ctx.request.body;
        let result = await this.ctx.service.user.insertProvince(param);
        if (result) {
            this.ctx.body = '添加成功';
        } else {
            this.ctx.body = '添加失败';
        }
    }
    async updateProvince() {
        let param = this.ctx.request.body;
        let result = await this.ctx.service.user.updateProvince(param);
        if (result) {
            this.ctx.body = `修改成功，共修改了${result.nModified}条数据`;
        } else {
            this.ctx.body = '修改失败';
        }
    }
    async deleteProvince() {
        let param = this.ctx.request.body;
        let result = await this.ctx.service.user.deleteProvince(param);
        if (result) {
            this.ctx.body = `删除成功`;
        } else {
            this.ctx.body = '删除失败';
        }
    }
}

module.exports = UserController;
