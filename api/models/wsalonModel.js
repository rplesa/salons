const mongoose = require("mongoose");

const SalonWSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  services: [
    {
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  ],

  city: {
    type: String,
    required: true,
  },
  price: {
    type: [Number],
    required: true,
  },
  address: {
    type: String,
  },
  photo: {
    type: String,
  },
  desc: {
    type: String,
  },

  openingHours: {
    type: [
      {
        day: String,
        hours: String,
      },
    ],
  },
  contactUs: {
    type: [
      {
        email: String,
        phone: String,
        facebook: String,
        instagram: String,
      },
    ],
  },
  startPrice: {
    type: Number,
    required: true,
  },
});

const WsalonModel = mongoose.model("SalonWomen", SalonWSchema);

module.exports = WsalonModel;
