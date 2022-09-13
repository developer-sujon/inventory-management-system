//External Import
const BrandRoutes = require("express").Router();
const BrandControllers = require("../controller/Brand/BrandControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Brand Create
BrandRoutes.post("/BrandCreate", UserAuth, BrandControllers.BrandCreate);

//Brand Drop Down
BrandRoutes.get("/BrandDropDown", UserAuth, BrandControllers.BrandDropDown);

//Brand List
BrandRoutes.get(
  "/BrandList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  BrandControllers.BrandList,
);

//Brand Details
BrandRoutes.get("/BrandDetails/:id", UserAuth, BrandControllers.BrandDetails);

//Brand Update
BrandRoutes.patch("/BrandUpdate/:id", UserAuth, BrandControllers.BrandUpdate);

//Brand Delete
BrandRoutes.delete("/BrandDelete/:id", UserAuth, BrandControllers.BrandDelete);

module.exports = BrandRoutes;
