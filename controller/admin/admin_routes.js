module.exports = function (router) {
  var admin = require("./admin_ctrl");
  router.get("/products", admin.getProducts);
  router.post("/product", admin.addProduct);
  router.put("/delete", admin.deleteProduct);
  router.post("/productdetails", admin.getProduct);
  router.post("/category", admin.addCategory);
  router.post("/subcategory", admin.addsubcategory);
  router.get("/categories", admin.getCategories);
  router.get("/subcategories", admin.getSubCategories);
  router.post("/brand", admin.addBrand);
  router.get("/brands", admin.getBrands);
  router.put('/deletecategory',admin.deleteCategory);
  router.put('/deletesubcategory',admin.deleteSubCategory);
  router.post('/getsubcategories',admin.getSubCategoryOnCategory);
  router.post('/upload',admin.uploadImage)
  return router;
};
