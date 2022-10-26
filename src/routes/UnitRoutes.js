//External Lib Import
const UnitRoutes = require("express").Router();
const UnitControllers = require("../controller/Unit/UnitControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Unit Create
UnitRoutes.post("/UnitCreate", UserAuth, UnitControllers.UnitCreate);

//Unit Drop Down
UnitRoutes.get("/UnitDropDown", UserAuth, UnitControllers.UnitDropDown);

//Unit List
UnitRoutes.get(
  "/UnitList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  UnitControllers.UnitList,
);

//Unit Details
UnitRoutes.get("/UnitDetails/:id", UserAuth, UnitControllers.UnitDetails);

//Unit Update
UnitRoutes.patch("/UnitUpdate/:id", UserAuth, UnitControllers.UnitUpdate);

//Unit Delete
UnitRoutes.delete("/UnitDelete/:id", UserAuth, UnitControllers.UnitDelete);

module.exports = UnitRoutes;
