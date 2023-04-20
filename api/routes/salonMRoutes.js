const express = require("express");
const {
  createMenSalon,
  updateMenSalon,
  deleteMenSalon,
  getMenSalon,
  getAllMenSalons,
} = require("../controller/SalonMController");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/", createMenSalon);

router.put("/:id",verifyAdmin, updateMenSalon);

router.delete("/:id",verifyAdmin, deleteMenSalon);

router.get("/:id", getMenSalon);

router.get("/", getAllMenSalons);

module.exports = router;
