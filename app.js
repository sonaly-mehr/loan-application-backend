const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// routes
const userRoute = require("./routes/UserDetailsRoute");
const businessRoute = require("./routes/BusinessDetailsRoute");
const loanRoute = require("./routes/LoanDetailsRoute");

//Database Connection
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.slxtz.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database !!");
  })
  .catch((err) => {
    console.log("Connection failed !!" + err.message);
  });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/api", userRoute);
app.use("/api", businessRoute);
app.use("/api", loanRoute);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("db is working!!");
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Started Sucessfully on ${PORT}`);
});
