var mongoose = require('mongoose');

var config = require('../config/config');

mongoose.Promise = global.Promises;

mongoose.connect(config.db.dbUrl,{
    user:config.db.username,
    pass:config.db.password,
})

var db =  mongoose.connection;
db.on("error",console.error.bind(console,"connection failed"));

db.once('open',function(){
    console.log("Database connected successfully");
})