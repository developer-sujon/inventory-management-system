//External Lib Import
const ProductRoutes = require("express").Router();
const ProductControllers = require("../controller/Product/ProductControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Product Create
ProductRoutes.post(
  "/ProductCreate",
  UserAuth,
  ProductControllers.ProductCreate,
);

//Product List
ProductRoutes.get(
  "/ProductList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ProductControllers.ProductList,
);

//Product Details
ProductRoutes.get(
  "/ProductDetails/:id",
  UserAuth,
  ProductControllers.ProductDetails,
);

//Product Update
ProductRoutes.patch(
  "/ProductUpdate/:id",
  UserAuth,
  ProductControllers.ProductUpdate,
);

//Product Delete
ProductRoutes.delete(
  "/ProductDelete/:id",
  UserAuth,
  ProductControllers.ProductDelete,
);

module.exports = ProductRoutes;
