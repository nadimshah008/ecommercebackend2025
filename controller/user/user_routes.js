module.exports = function (router) {
  var user = require("./user_ctrl");
  router.get("/users", user.getUser);
  router.post("/signup", user.addUser);
  router.put("/user", user.updateUser);
  router.post('/login',user.loginUser)
  router.post('/registeradmin', user.addAdmin);
  router.post('/loginadmin',user.loginAdmin);
  router.post('/send-otp',user.sendOtp);
  router.post('/verify-otp',user.verifyOtp);
  return router;
};
