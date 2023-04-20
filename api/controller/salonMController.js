const MsalonModel = require("../models/msalonModel");


exports.createMenSalon= async (req, res) => {
    const newSalon = new MsalonModel({...req.body, gender: 'male'});
  
    try {
      const savedSalon = await newSalon.save();
      res.status(200).json(savedSalon);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  exports.updateMenSalon= async (req, res) => {
    try {
      const updatedSalon = await MsalonModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedSalon);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  exports.deleteMenSalon=async (req, res) => {
    try {
      await MsalonModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Salon has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  exports.getMenSalon= async (req, res) => {
    try {
      const salon = await MsalonModel.findById(req.params.id);
      res.status(200).json(salon);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  exports.getAllMenSalons = async (req, res, next) => {
    try {
      const { city } = req.query;
      let salons = await MsalonModel.find();
      if (city) {
        salons = salons.filter((salon) => salon.city.toLowerCase() === city.toLowerCase());
      }
      res.status(200).json(salons);
    } catch (err) {
      next(err);
    }
  };
  