const env = process.env.NODE_ENV;

const config = {
  local: {
    port: 3000,
    apiUrl: "http://13.61.34.80:3000/",
    db: {
      username: "",
      password: "",
      dbName: "ecommerce",
      dbUrl: "mongodb://127.0.0.1:27017/ecommerce",
    },
  },
};

module.exports = config[env];
