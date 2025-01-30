"use strict";
const common = require("../../commonQuery/common");
const users = require("../user/model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const store = { email: "" };
const fstore = { email: "" };
const { v4: uuidv4 } = require("uuid");
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email provider (e.g., Gmail)
  auth: {
    user: "nadim.shah.official@gmail.com", // Set in .env file
    pass: "rqtm mwgm kmma hzni", // Set in .env file
  },
});
function generateOtp() {
  return Math.floor(Math.random() * 999999);
}
module.exports = {
  getUser: getUser,
  addUser: addUser,
  updateUser: updateUser,
  loginUser: loginUser,
  addAdmin: addAdmin,
  loginAdmin: loginAdmin,
  sendOtp: sendOtp,
  verifyOtp: verifyOtp,
  forgotPassword: forgotPassword,
  changePassword: changePassword,
};

function changePassword(req, res) {
  async function changePassword() {
    try {
      if (req.body.password && req.body.otp) {
        let findOtpAndUser = await common.findOne(users, {
          resetkey: req.body.otp,
          uuid: req.body.uuid,
        });
        if (!findOtpAndUser) {
          return res.json({ message: "No user found", status: 400 });
        } else {
          const salt = await bcrypt.genSalt(saltRounds);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);

          const updatedUser = await users.updateOne(
            { uuid: req.body.uuid },
            { $set: { password: hashedPassword } }
          );

          if (updatedUser.modifiedCount === 0) {
            return res.json({
              message: "Failed to update password",
              status: 400,
            });
          }
          res.json({ message: "Password updated successfully", status: 200 });
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
  changePassword().then(function () {});
}
function forgotPassword(req, res) {
  async function forgotPassword() {
    try {
      if (!req.body.email) {
        res.json({ message: "Email is requried", status: 400 });
      }
      if (req.body && req.body.email) {
        let userData = await common.findOne(users, { email: req.body.email });
        if (!userData.length) {
          return res.json({
            message: "User not registered",
            status: 400,
            data: null,
          });
        } else {
          let otp = await generateOtp();
          let myUUID = uuidv4();
          let userUpdate = await common.updateOne(
            users,
            { email: req.body.email },
            { resetkey: otp, uuid: myUUID }
          );
          if (!userUpdate) {
            res.json({ message: "User not found", status: 400 });
          } else {
            fstore["email"] = { otp, createdAt: Date.now() };
            let userData = await common.findOne(users, {
              email: req.body.email,
            });
            userData[0].password = null;
            await transporter.sendMail({
              from: process.env.EMAIL,
              to: req.body.email,
              Subject: "Unixy OTP Code",
              html: `
              <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f7f7f7;">
                <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <h1 style="color: #333;">Your OTP Code</h1>
                  <p style="font-size: 16px; color: #555;">Use the code below to change your password. This code is valid for 5 minutes.</p>
                  <div style="margin: 20px 0; font-size: 24px; font-weight: bold; color:rgb(207, 245, 37);">${otp}</div>
                  <p style="font-size: 14px; color: #888;">If you didn’t request this, you can safely ignore this email.</p>
                </div>
              </div>
            `,
            });
            res.json({
              message: "OTP send successfully",
              status: 200,
              otp: otp,
              data: userData,
            });
          }
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
  forgotPassword().then(function () {});
}

function verifyOtp(req, res) {
  async function verifyOtp() {
    try {
      if (!req.body.email || !req.body.otp) {
        return res.json({ message: "Email and OTP are required", status: 400 });
      }

      const otpData = store["email"];
      if (!otpData.otp) {
        return res.json({ message: "OTP is expired", status: 400 });
      }

      const isOTPValid = otpData.otp == req.body.otp;
      const isOtpExpired = Date.now() - store.createdAt > 5 * 60 * 1000;
      if (isOtpExpired) {
        delete store["email"];
        return res.status(400).json({ message: "OTP expired" });
      }

      if (!isOTPValid) {
        return res.status(400).json({ message: "Invalid OTP" });
      }

      delete store[req.body.email];
      return res.json({ message: "OTP verified successfully", status: 200 });
    } catch (error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  }
  verifyOtp().then(function () {});
}

function sendOtp(req, res) {
  async function sendOtp() {
    if (!req.body.email) {
      res.json({ message: "Email is requried", status: 400 });
    }
    let otp = await generateOtp();
    store["email"] = { otp, createdAt: Date.now() };
    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: req.body.email,
        Subject: "Unixy OTP Code",
        html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f7f7f7;">
        <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h1 style="color: #333;">Your OTP Code</h1>
          <p style="font-size: 16px; color: #555;">Use the code below to verify your email address. This code is valid for 5 minutes.</p>
          <div style="margin: 20px 0; font-size: 24px; font-weight: bold; color:rgb(207, 245, 37);">${otp}</div>
          <p style="font-size: 14px; color: #888;">If you didn’t request this, you can safely ignore this email.</p>
        </div>
      </div>
    `,
      });
      res.json({ message: "OTP send successfully", status: 200, otp: otp });
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  sendOtp().then(function () {});
}

function addAdmin(req, res) {
  async function addAdmin() {
    try {
      if (req.body && req.body.email) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let saveUser = new users({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone || null,
          password: hashedPassword,
          isActive: true,
          role: 0,
        });
        let saveUserData = await common.insertOne(users, saveUser);
        if (!saveUserData) {
          res.json({ message: "Failed to add the data", status: 400 });
        } else {
          res.json({
            data: saveUserData,
            status: 200,
            message: "Admin Registered Successfully",
          });
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  addAdmin().then(function () {});
}

function loginUser(req, res) {
  async function loginUser() {
    try {
      if (req.body && req.body.email) {
        let condition = { email: req.body.email };
        let fetchUser = await common.findOne(users, condition);
        if (!fetchUser.length) {
          res.json({ message: "No user found", status: 400 });
        } else {
          let password = fetchUser[0].password;
          const passwordMatch = await bcrypt.compare(
            req.body.password,
            password
          );
          if (passwordMatch) {
            const token = jwt.sign(
              { email: req.body.email },
              "hotelDBManagement",
              { expiresIn: "1m" }
            );
            res.json({
              message: "User is valid, Logged in successfully",
              token: token,
              status: 200,
            });
          } else {
            res.json({ message: "Password does not match", status: 400 });
          }
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
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
          email: req.body.email,
        });
        if (fetchUser[0].role !== 0) {
          res.json({ message: "Only Admins Can Login", status: 400 });
        }
        if (!fetchUser.length) {
          res.json({ message: "No user found", status: 400 });
        } else {
          let password = fetchUser[0].password;
          const passwordMatch = await bcrypt.compare(
            req.body.password,
            password
          );
          if (passwordMatch) {
            const token = jwt.sign(
              { email: req.body.email },
              "hotelDBManagement",
              { expiresIn: "1m" }
            );
            res.json({
              message: "Admin is valid, Logged in successfully",
              token: token,
              status: 200,
            });
          } else {
            res.json({ message: "Password does not match", status: 400 });
          }
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  loginAdmin().then(function () {});
}

function getUser(req, res) {
  async function getUser() {
    try {
      let userData = await common.findAll(users, {});
      if (!userData) {
        res.json({ message: "No Data Found", status: 400 });
      } else {
        res.json({
          status: 200,
          data: userData,
          message: "User fetched Successfully",
        });
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
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
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          password: hashedPassword,
          isActive: true,
          role: 1,
        });
        let saveUserData = await common.insertOne(users, saveUser);
        if (!saveUserData) {
          res.json({ message: "Failed to add the data", status: 400 });
        } else {
          res.json({
            data: saveUserData,
            status: 200,
            message: "User Registered Successfully",
          });
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
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
