const mongoose = require("mongoose");
var userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      default: null,
    },
    password:{
      type:String,
      default:null
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
