module.exports = options => {
    return async function (ctx, next) {
        try {
          await next();
        } catch (e) {
            ctx.status = 402;
            ctx.body = {
                success: false,
                message: e.message
            }
        }
    }
};
