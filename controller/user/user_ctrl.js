"use strict";
const common = require("../../commonQuery/common");
const users = require("../user/model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

module.exports = {
  getUser: getUser,
  addUser: addUser,
  updateUser: updateUser,
  loginUser: loginUser,
  addAdmin:addAdmin,
  loginAdmin:loginAdmin
};


function addAdmin(req,res){
  async function addAdmin(){
    try {
      if (req.body && req.body.email) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let saveUser = new users({
          name:req.body.name,
          email: req.body.email,
          phone: req.body.phone|| null,
          password: hashedPassword, 
          isActive:true,
          role:0
        });
        let saveUserData = await common.insertOne(users, saveUser);
        if (!saveUserData) {
          res.json({ message: "Failed to add the data" ,status:400});
        } else {
          res.json({ data: saveUserData, status:200, message:"Admin Registered Successfully" });
        }
      }
    } catch (error) {
      res.json({ message: error,status:500 });
    }
  }
  addAdmin().then(function(){})
}

function loginUser(req, res) {
  async function loginUser() { 
    try {
      if (req.body && req.body.email) {
        let condition = { email: req.body.email };
        let fetchUser = await common.findOne(users, condition);
        if (!fetchUser.length) {
          res.json({ message: "No user found" ,status:400});
        } else {
          let password = fetchUser[0].password;
          const passwordMatch = await bcrypt.compare(
            req.body.password,
            password
          );
          if (passwordMatch) {
            const token = jwt.sign({email:req.body.email},'hotelDBManagement',{expiresIn:'1m'})
            res.json({ message: "User is valid, Logged in successfully" ,"token":token,status:200});
          } else {
            res.json({ message: "Password does not match",status:400 });
          }
        }
      }
    } catch (error) {
      res.json({ message: error, status:500 });
    }
  }
  loginUser().then(function () {});
}

function loginAdmin(req, res) {
  async function loginAdmin() {
    try {
      if (req.body && req.body.email) {
        let condition = { email: req.body.email };
        let fetchUser = await common.findOne(users, {
          email:req.body.email
        });
        if(fetchUser[0].role!==0){
          res.json({message:"Only Admins Can Login", status:400});
        }
        if (!fetchUser.length) {
          res.json({ message: "No user found" ,status:400});
        } else {
          let password = fetchUser[0].password;
          const passwordMatch = await bcrypt.compare(
            req.body.password,
            password
          );
          if (passwordMatch) {
            const token = jwt.sign({email:req.body.email},'hotelDBManagement',{expiresIn:'1m'})
            res.json({ message: "Admin is valid, Logged in successfully" ,"token":token,status:200});
          } else {
            res.json({ message: "Password does not match",status:400 });
          }
        }
      }
    } catch (error) {
      res.json({ message: error, status:500 });
    }
  }
  loginAdmin().then(function () {});
}

function getUser(req, res) {
  async function getUser() {
    try {
      let userData = await common.findAll(users, {});
      if (!userData) {
        res.json({ message: "No Data Found",status:400 });
      } else {
        res.json({
          status: 200,
          data: userData,
          message: "User fetched Successfully",
        });
      }
    } catch (error) {
      res.json({ message: error,status:500 });    }
  }
  getUser().then(function () {});
}

function addUser(req, res) {
  async function addUser() {
    try {
      if (req.body && req.body.email) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let saveUser = new users({
          name:req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          password: hashedPassword,
          isActive:true,
          role:1
        });
        let saveUserData = await common.insertOne(users, saveUser);
        if (!saveUserData) {
          res.json({ message: "Failed to add the data" ,status:400});
        } else {
          res.json({ data: saveUserData, status:200, message:"User Registered Successfully" });
        }
      }
    } catch (error) {
      res.json({ message: error,status:500 });
    }
  }
  addUser().then(function () {});
}

function updateUser(req, res) {
  async function updateUser() {
    try {
      if (req.body) {
        let condition = { email: req.body.email };
        let dataToUpdate = {
          firstName: req.body.firstName,
          phone: req.body.phone,
        };
        let findUser = common.findOne(users, condition);
        if (findUser) {
          let userDataUpdate = await common.updateOne(
            users,
            condition,
            dataToUpdate
          );

          if (userDataUpdate) {
            res.json({ message: "User updated", data: userDataUpdate });
          } else {
            res.json({ message: "Failed to update user" });
          }
        } else {
          res.json({ message: "No such user" });
        }
      }
    } catch (error) {
      res.json({ message: error });
    }
  }
  updateUser().then(function () {});
}
