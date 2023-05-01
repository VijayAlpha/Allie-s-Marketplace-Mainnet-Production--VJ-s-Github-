const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const compression = require("compression");

const collectionRouter = require("./routes/collectionRouter");

const AppError = require("./utils/appError.js");

dotenv.config();

const app = express();

app.use(cors())

// For frontend file serving
app.set("views", "./view");
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to compress the res size to the user
app.use(compression());


// For API
app.use("/api/collection", collectionRouter);

app.get("/", (req, res) => {
  res.send("Success");
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// For Server setup
const PORT = process.env.PORT || 8000;
let DB_URL = process.env.DB_CONNECTION_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on ${PORT} :${process.env.NODE_ENV}`)
    )
  )
  .catch((error) => console.log("ERROR:" + error.message));

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
