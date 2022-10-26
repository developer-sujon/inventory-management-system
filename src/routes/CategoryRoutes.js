//External Lib Import
const CategoryRoutes = require("express").Router();
const CategoryControllers = require("../controller/Category/CategoryControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Category Create
CategoryRoutes.post(
  "/CategoryCreate",
  UserAuth,
  CategoryControllers.CategoryCreate,
);

//Category Drop Down
CategoryRoutes.get(
  "/CategoryDropDown",
  UserAuth,
  CategoryControllers.CategoryDropDown,
);

//Category List
CategoryRoutes.get(
  "/CategoryList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  CategoryControllers.CategoryList,
);

//Category Details
CategoryRoutes.get(
  "/CategoryDetails/:id",
  UserAuth,
  CategoryControllers.CategoryDetails,
);

//Category Update
CategoryRoutes.patch(
  "/CategoryUpdate/:id",
  UserAuth,
  CategoryControllers.CategoryUpdate,
);

//Category Delete
CategoryRoutes.delete(
  "/CategoryDelete/:id",
  UserAuth,
  CategoryControllers.CategoryDelete,
);

module.exports = CategoryRoutes;
