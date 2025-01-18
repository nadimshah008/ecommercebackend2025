const exp = require("express");
module.exports = function (express) {
  var router = exp.Router();
  // user
  require("./user/user_routes")(router);
  //admin
  require('./admin/admin_routes')(router);

  return router;
};
