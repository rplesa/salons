const express = require("express");
const {
  createWomenSalon,
  updateWomenSalon,
  deleteWomenSalon,
  getAllWomenSalons,
  getWomenSalons,
} = require("../controller/salonWController");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/", createWomenSalon);

router.put("/:id",verifyAdmin, updateWomenSalon);

router.delete("/:id",verifyAdmin, deleteWomenSalon);

router.get("/:id", getWomenSalons);

router.get("/", getAllWomenSalons);

module.exports = router;
