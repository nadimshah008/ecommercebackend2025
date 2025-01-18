"use strict";
const common = require("../../commonQuery/common");
const products = require("../admin/model/product");
const subcategory = require("../admin/model/subcategory");
const category = require("../admin/model/category");
const brands = require("../admin/model/brand");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

module.exports = {
  getProducts: getProducts,
  addProduct: addProduct,
  deleteProduct: deleteProduct,
  getProduct: getProduct,
  addCategory: addCategory,
  addsubcategory: addsubcategory,
  getCategories: getCategories,
  getSubCategories: getSubCategories,
  addBrand: addBrand,
  getBrands: getBrands,
  deleteCategory: deleteCategory,
  deleteSubCategory:deleteSubCategory,
  getSubCategoryOnCategory:getSubCategoryOnCategory,
  uploadImage:uploadImage
};

function uploadImage(){
    async function uploadImage(){

    }
    uploadImage().then(function(){})
}

function addBrand(req, res) {
  async function addBrand() {
    try {
      if (!req.body.name) {
        res.json({ message: "Required fileds are missing", status: 400 });
      }
      const saveBrand = new brands({
        name: req.body.name,
        description: req.body.description || "",
      });
      let saveBrandData = await common.insertOne(brands, saveBrand);
      if (!saveBrandData) {
        res.json({ message: "Failed to add the Brand", status: 400 });
      } else {
        res.json({ data: saveBrandData, status: 200 });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  addBrand().then(function () {});
}
function getBrands(req, res) {
  async function getBrands() {
    try {
      let brandData = await common.findAll(brands, {});
      if (!brandData) {
        res.json({ message: "Failed to get the brands", status: 400 });
      } else {
        res.json({
          message: "Brands Fetched",
          data: brandData,
          status: 200,
        });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  getBrands().then(function () {});
}

function addCategory(req, res) {
  async function addCategory() {
    try {
      if (!req.body.name) {
        res.json({ message: "Required fileds are missing", status: 400 });
      }
      const saveCategory = new category({
        name: req.body.name,
        description: req.body.description || "",
      });
      let saveCategoryData = await common.insertOne(category, saveCategory);
      if (!saveCategoryData) {
        res.json({ message: "Failed to add the category", status: 400 });
      } else {
        res.json({
          data: saveCategoryData,
          status: 200,
          message: "Category Added",
        });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  addCategory().then(function () {});
}

function deleteCategory(req, res) {
  async function deleteCategory() {
    try {
      if (req.body) {
        let ID = req.body.id;
        let condition = { _id:ID };
        let data = {
          isActive: false,
        };
        let categoryData = await common.findOneAndUpdate(category, condition, data);
        if (!categoryData) {
          res.json({ message: "Failed to delete", status: 400 });
        } else {
          res.json({
            status: 200,
            message: "Category Deleted Successfully",
            data: categoryData,
          });
        }
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  deleteCategory().then(function () {});
}
function deleteSubCategory(req, res) {
    async function deleteSubCategory() {
      try {
        if (req.body) {
          let ID = req.body.id;
          let condition = { _id:ID };
          let data = {
            isActive: false,
          };
          let categoryData = await common.findOneAndUpdate(subcategory, condition, data);
          if (!categoryData) {
            res.json({ message: "Failed to delete", status: 400 });
          } else {
            res.json({
              status: 200,
              message: "Sub Category Deleted Successfully",
              data: categoryData,
            });
          }
        }
      } catch (error) {
        res.json({ data: error, status: 500 });
      }
    }
    deleteSubCategory().then(function () {});
  }

function getCategories(req, res) {
  async function getCategories() {
    try {
      let categories = await common.findAll(category, {});
      if (!categories) {
        res.json({ message: "Failed to get the categories", status: 400 });
      } else {
        res.json({
          message: "Categories Fetched",
          data: categories,
          status: 200,
        });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  getCategories().then(function () {});
}

function getSubCategories(req, res) {
  async function getSubCategories() {
    try {
      let subcategories = await subcategory.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "parentCategory",
            foreignField: "_id",
            as: "categor",
          },
        },
        {
          $unwind: "$categor",
        },
        {
          $project: {
            _id: 1,
            name: 1,
            description: 1,
            isActive: 1,
            categor: {
              name: 1,
              description: 1,
              isActive: 1,
            },
          },
        },
      ]);

      if (!subcategories) {
        res.json({ message: "Failed to get the subcategories", status: 400 });
      } else {
        res.json({
          message: "subcategories Fetched",
          data: subcategories,
          status: 200,
        });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  getSubCategories().then(function () {});
}

function addsubcategory(req, res) {
  async function addsubcategory() {
    try {
      if (!req.body.name) {
        res.json({ message: "Required fileds are missing", status: 400 });
      }
      const parentCategory = await category.findOne({
        name: req.body.category,
      });

      if (!parentCategory) {
        res.json({
          message: "Category is required to add sub category",
          status: 400,
        });
      }
      const savesubcategory = new subcategory({
        name: req.body.name,
        description: req.body.description || "",
        parentCategory: parentCategory._id,
      });
      let savesubcategoryData = await common.insertOne(
        subcategory,
        savesubcategory
      );
      if (!savesubcategoryData) {
        res.json({ message: "Failed to add the subcategory", status: 400 });
      } else {
        res.json({ data: savesubcategoryData, status: 200, message:"Added Subcategory" });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  addsubcategory().then(function () {});
}

function getProducts(req, res) {
  async function getProducts() {
    try {
      if (req.body) {
        let productsData = await common.findAll(products,{});
        if(!productsData){
            res.json({message:'No Products ',status:400})
        }
        else{
            res.json({message:"Products fetched Successfully",data:productsData,status:200})
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  getProducts().then(function () {});
}

function getSubCategoryOnCategory(req,res){
    async function getSubCategoryOnCategory(){
        try {
            if(req.body && req.body.category){
                let condition = {name:req.body.category}
                let categories = await common.findOne(category,condition);
                if(!categories){
                    res.json({message:'No Category Found', status:400})
                }
                else{
                    let ID = categories[0]._id;
                    let conditionT = {parentCategory:ID,isActive:true}
                    let subCategoriesData =  await common.findAll(subcategory,conditionT);
                    if(!subCategoriesData){
                        res.json({message:"No Sub Categories Fetched",status:400})
                    }
                    else{
                        res.json({message:"Sub Categories Fetched",status:200,data:subCategoriesData})
                    }
                }
            }
            
        } catch (error) {
            res.json({ message: error, status: 500 });
        }
    }
    getSubCategoryOnCategory().then(function(){})
}

function addProduct(req, res) {
  async function addProduct() {
    try {
      if (!req.body.name || !req.body.price || !req.body.category) {
        res.json({ message: "Required fileds are missing", status: 400 });
      }
      const saveProduct = new products({
        name: req.body.name,
        description: req.body.description || "",
        brand: req.body.brand || "Generic",
        category: req.body.category,
        subcategory: req.body.subcategory,
        size: req.body.size || [],
        color: req.body.color || [],
        variants: req.body.variants || [],
        crossprice:req.body.crossprice || 0 ,
        price: req.body.price,
        discount: req.body.discount || 0,
        stock: req.body.stock || 0,
        images: req.body.images || [],
        reviews:[],
        ratings: {
          average: req.body.ratings?.average || 0,
          count: req.body.ratings?.count || 0,
        },
        tags: req.body.tags || [],
      });
      let saveProductData = await common.insertOne(products, saveProduct);
      if (!saveProductData) {
        res.json({ message: "Failed to add the product", status: 400 });
      } else {
        res.json({ data: saveProductData, status: 200 });
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  addProduct().then(function () {});
}

function deleteProduct(req, res) {}

function getProduct(req, res) {

    



}
