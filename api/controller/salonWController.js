const WsalonModel = require("../models/wsalonModel");

exports.createWomenSalon = async (req, res) => {
  const newSalon = new WsalonModel(req.body);
  try {
    const savedSalon = await newSalon.save();
    res.status(200).json(savedSalon);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateWomenSalon = async (req, res) => {
  try {
    const updatedSalon = await WsalonModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSalon);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteWomenSalon = async (req, res) => {
  try {
    await WsalonModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Salon has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getWomenSalons = async (req, res) => {
  try {
    const salon = await WsalonModel.findById(req.params.id);
    res.status(200).json(salon);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getAllWomenSalons = async (req, res, next) => {
  try {
    const { city } = req.query;
    let salons = await WsalonModel.find();
    if (city) {
      salons = salons.filter(
        (salon) => salon.city.toLowerCase() === city.toLowerCase()
      );
    }
    res.status(200).json(salons);
  } catch (err) {
    next(err);
  }
};
