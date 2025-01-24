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
  deleteSubCategory: deleteSubCategory,
  getSubCategoryOnCategory: getSubCategoryOnCategory,
  getFilterProducts: getFilterProducts,
  getLatestProducts: getLatestProducts,
};

function getLatestProducts(req, res) {
  console.log("Ssssssssssssss");
  async function getLatestProducts() {
    try {
      let latestProducts = await products.find({isActive:true})
      .sort({ createdAt: -1 })
      .limit(10)
      .exec();
        
        console.log("latestProducts",latestProducts);
      if (!latestProducts) {
        res.json({
          message: "Failed to fetch products",
          status: 400,
          data: null,
        });
      } else {
        res.json({
          message: "Products fetched successfully",
          status: 200,
          data: latestProducts,
        });
      }
    } catch (error) {
      console.log(error)
      res.json({ data: error, status: 500 });
    }
  }
  getLatestProducts().then(function () {});
}

function getFilterProducts(req, res) {
  async function getFilterProducts() {
    try {
      let condition = {
        isActive: true,
        category: req.body.category,
        subcategory: req.body.subcategory,
      };
      let response = await common.findAll(products, condition);
      if (!response) {
        res.json({
          message: "Failed to fetch products",
          status: 400,
          data: null,
        });
      } else {
        res.json({
          message: "Products fetched successfully",
          status: 200,
          data: response,
        });
      }
    } catch (error) {
      res.json({ data: error, status: 500 });
    }
  }
  getFilterProducts().then(function () {});
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
        let condition = { _id: ID };
        let data = {
          isActive: false,
        };
        let categoryData = await common.findOneAndUpdate(
          category,
          condition,
          data
        );
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
        let condition = { _id: ID };
        let data = {
          isActive: false,
        };
        let categoryData = await common.findOneAndUpdate(
          subcategory,
          condition,
          data
        );
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
        res.json({
          data: savesubcategoryData,
          status: 200,
          message: "Added Subcategory",
        });
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
        let productsData = await common.findAll(products, { isActive: true });
        if (!productsData) {
          res.json({ message: "No Products ", status: 400 });
        } else {
          res.json({
            message: "Products fetched Successfully",
            data: productsData,
            status: 200,
          });
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  getProducts().then(function () {});
}

function getSubCategoryOnCategory(req, res) {
  async function getSubCategoryOnCategory() {
    try {
      if (req.body && req.body.category) {
        let condition = { name: req.body.category };
        let categories = await common.findOne(category, condition);
        if (!categories) {
          res.json({ message: "No Category Found", status: 400 });
        } else {
          let ID = categories[0]._id;
          let conditionT = { parentCategory: ID, isActive: true };
          let subCategoriesData = await common.findAll(subcategory, conditionT);
          if (!subCategoriesData) {
            res.json({ message: "No Sub Categories Fetched", status: 400 });
          } else {
            res.json({
              message: "Sub Categories Fetched",
              status: 200,
              data: subCategoriesData,
            });
          }
        }
      }
    } catch (error) {
      res.json({ message: error, status: 500 });
    }
  }
  getSubCategoryOnCategory().then(function () {});
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
        crossprice: req.body.crossprice || 0,
        price: req.body.price,
        sku: req.body.sku | "",
        discount: req.body.discount || 0,
        stock: req.body.stock || 0,
        images: req.body.images || [],
        reviews: [],
        ratings: {
          average: req.body.ratings?.average || 0,
          count: req.body.ratings?.count || 0,
        },
        tags: req.body.tags || [],
        bagsize: req.body.bagsize || [],
        salespackage: req.body.salespackage || "",
        slots: req.body.slots || "",
        material: req.body.material || "",
        width: req.body.width || "",
        height: req.body.height || "",
        warranty: req.body.warranty || "",
        returnpolicy: req.body.returnpolicy || "",
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
  async function getProduct() {
    try {
      if (req.body && req.body.id) {
        let condition = { _id: req.body.id };
        let productData = await common.findOne(products, {
          _id: req.body.id,
        });
        if (!productData) {
          return res
            .status(404)
            .json({ message: "No product found", status: 400, data: null });
        }
        return res
          .status(200)
          .json({ message: "Product Fetched", status: 200, data: productData });
      } else {
        return res
          .status(400)
          .json({ message: "Invalid request body", status: 400 });
      }
    } catch (error) {
      if (!res.headersSent) {
        return res.status(500).json({ message: error.message, status: 500 });
      }
      console.error("Error after response was sent:", error);
    }
  }
  getProduct().then(function () {});
}
