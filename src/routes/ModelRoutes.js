//External Lib Import
const ModelRoutes = require("express").Router();
const ModelControllers = require("../controller/Model/ModelControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Model Create
ModelRoutes.post("/ModelCreate", UserAuth, ModelControllers.ModelCreate);

//Model Drop Down
ModelRoutes.get("/ModelDropDown", UserAuth, ModelControllers.ModelDropDown);

//Model List
ModelRoutes.get(
  "/ModelList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ModelControllers.ModelList,
);

//Model Details
ModelRoutes.get("/ModelDetails/:id", UserAuth, ModelControllers.ModelDetails);

//Model Update
ModelRoutes.patch("/ModelUpdate/:id", UserAuth, ModelControllers.ModelUpdate);

//Model Delete
ModelRoutes.delete("/ModelDelete/:id", UserAuth, ModelControllers.ModelDelete);

module.exports = ModelRoutes;
