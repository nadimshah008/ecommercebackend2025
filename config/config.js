const env = process.env.NODE_ENV;

const config = {
  local: {
    port: 4000,
    apiUrl: "http://localhost:4000/",
    db: {
      username: "",
      password: "",
      dbName: "ecommerce",
      dbUrl: "mongodb://127.0.0.1:27017/ecommerce",
    },
  },
};

module.exports = config[env];
