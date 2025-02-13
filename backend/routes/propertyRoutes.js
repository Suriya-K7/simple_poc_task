const propertyRouter = require("express").Router();

const {
  getPropertyData,
  getPropertyDataById,
  addNewProperty,
  addReview,
  deleteProperty,
  updatePropertyFav,
} = require("../controllers/propertyController");

propertyRouter.get("/api/property", getPropertyData);
propertyRouter.get("/api/property/:id", getPropertyDataById);
propertyRouter.post("/api/property", addNewProperty);
propertyRouter.post("/api/property/review", addReview);
propertyRouter.delete("/api/property/:id", deleteProperty);
propertyRouter.patch("/api/property/fav/:id", updatePropertyFav);

module.exports = propertyRouter;
