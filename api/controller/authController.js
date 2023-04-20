const UserModal = require("../models/usersModel");
const createError = require("./../utils/error");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const existingUser = await UserModal.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).send({ message: 'An account with that username already exists' });
    }

    if (req.body.password.length < 4) {
      return res.status(400).send({ message: 'Password must be at least 4 characters long' });
    }


    const newUser = new UserModal({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created");
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await UserModal.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Password/Username is incorrect"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({ ...otherDetails, isAdmin });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
    try {
      res.clearCookie("access_token");
      res.status(200).json({ message: "User has been logged out" });
    } catch (err) {
      next(err);
    }
  };