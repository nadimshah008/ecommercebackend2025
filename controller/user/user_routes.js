module.exports = function (router) {
  var user = require("./user_ctrl");
  router.get("/users", user.getUser);
  router.post("/signup", user.addUser);
  router.put("/user", user.updateUser);
  router.post('/login',user.loginUser)
  return router;
};
