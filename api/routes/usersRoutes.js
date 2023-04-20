const express = require("express");
const {
  updateUser,
  deteleUser,
  getUser,
  getAllUsers,
} = require("../controller/userController");
//const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.put("/:id", updateUser);

router.delete("/:id", deteleUser);

router.get("/:id", getUser);

router.get("/", getAllUsers);

module.exports = router;
