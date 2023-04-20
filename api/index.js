const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/usersRoutes");
const salonWRoutes = require("./routes/salonsWRoutes");
const salonMRoute = require("./routes/salonMRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const compression= require('compression')

const app = express();
dotenv.config();


app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single('photo'), (req, res) => {
  const photo = req.file ? "/uploads/" + req.file.filename : null;
  res.send({ photo });
});

app.use("/api/uploads", express.static("uploads"));

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/women", salonWRoutes);
app.use("/api/msalon", salonMRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use(compression())

app.listen(8080, () => {
  connect();
  console.log("Connected with backend");
});
