const mongoose = require("mongoose");

const common = {};


common.aggregateFunc = function aggregateFunc(
  model,
  fromTable,
  localFieldVal,
  foreignFieldVal,
  condition
) {
  return new Promise(function(resolve, reject) {
    model
      .aggregate([
        {
          $match: condition
        },
        {
          $lookup: {
            from: fromTable,
            localField: localFieldVal,
            foreignField: foreignFieldVal,
            as: "docs"
          }
        },
        { $unwind: "$docs" },
      ])
      .exec(function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
  });
};



common.insertOne = async function insertOne(collection, data) {
  return new Promise(function (resolve, reject) {
    collection
      .create(data)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

common.findOne = async function findOne(collection, condition) {
  return new Promise(function (resolve, reject) {
    collection
      .find(condition)
      .exec()
      .then((data) => {
          resolve(data);
      })
      .catch((error) => {
        reject(error);
      }); 
  });
};

common.findAll = async function findAll(collection, condition) {
  return new Promise(function (resolve, reject) {
    if (condition) {
      condition = condition;
    } else {
      condition = {};
    }
    collection
      .find(condition)
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

common.updateOne = async function updateOne(collection, condition, data) {
  return new Promise(function (resolve, reject) {
    collection
      .updateOne(condition, data)
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

common.findOneAndUpdate = async function findOneAndUpdate(collection, condition,data) {
  return new Promise(function(resolve, reject) {
    collection
      .findOneAndUpdate(
        condition,
        {
          $set: data
        },
        {
          new: true
        }
      )
      .lean()
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = common;
