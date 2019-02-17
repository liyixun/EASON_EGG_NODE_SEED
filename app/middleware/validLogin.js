
module.exports = options => {
    return async function (ctx, next) {
        try {
            if (ctx.session && ctx.session.user) {
                return await next();
            } else {
                ctx.status = 401;
                ctx.body = {
                    success: false,
                    message: '请登录！'
                }
            }
        } catch (e) {
            ctx.status = 500;
            ctx.body = {
                success: false,
                message: '校验登录发生错误!'
            }
        }
    }
};
