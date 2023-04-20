const mongoose = require("mongoose");
const { Schema } = mongoose;

const SalonMSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  services: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
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
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
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

const MsalonModel = mongoose.model("Salon", SalonMSchema);

module.exports = MsalonModel;
