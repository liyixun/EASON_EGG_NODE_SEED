'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const validLogin = middleware.validLogin();
  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/logout', controller.user.logout);
  router.post('/api/user/queryProvinceByProvinceName', validLogin, controller.user.queryProvinceByProvinceName);
  router.post('/api/user/addProvince', controller.user.addProvince);
  router.post('/api/user/updateProvince', controller.user.updateProvince);
  router.post('/api/user/deleteProvince', controller.user.deleteProvince);
};
