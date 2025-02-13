const PropertyDataModel = require("../models/propertyModel");

const getPropertyDataById = async (req, res) => {
  try {
    const { id } = req.params;

    const matchedData = await PropertyDataModel.findById({
      _id: id,
    });

    if (!matchedData) {
      return res.status(404).json({ message: "Property not found" });
    }

    return res.status(200).json(matchedData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPropertyData = async (req, res) => {
  try {
    const allOnboardingData = await PropertyDataModel.find();

    return res.status(200).json(allOnboardingData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await PropertyDataModel.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json({ message: "Property deleted successfully" });
    return;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePropertyFav = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await PropertyDataModel.findById(id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Toggle the isFav value
    property.isFav = !property.isFav;

    await property.save();

    return res.status(200).json(property);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addReview = async (req, res) => {
  try {
    const { review, id } = req.body;

    if (!id || !review) {
      return res.status(400).json({ message: "ID and review are required" });
    }

    const updatedData = await PropertyDataModel.findByIdAndUpdate(
      id,
      { $push: { reviews: review } },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Property not found" });
    }

    return res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewProperty = async (req, res) => {
  try {
    const {
      name,
      price,
      location,
      address,
      contact,
      keyFeatures,
      description,
      image,
      owner,
      rating,
    } = req.body;

    if (
      !name ||
      !price ||
      !location ||
      !address ||
      !contact ||
      !keyFeatures ||
      !description ||
      !image ||
      !owner ||
      !rating
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProperty = await PropertyDataModel.create({
      name,
      price,
      location,
      address,
      contact,
      keyFeatures,
      description,
      image,
      owner,
      rating,
    });

    return res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPropertyData,
  getPropertyDataById,
  deleteProperty,
  updatePropertyFav,
  addReview,
  addNewProperty,
};
