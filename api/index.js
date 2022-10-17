const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const model = require("./models");
const Role = model.role;
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });


//create connection to db ==============

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//connect to db ========================
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("database connected");
});

// model.sequelize.sync({ force: true }).then(() => {
//   console.log("drop and resync db");
//   initial();
// });
model.sequelize.sync()

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Mika Web Monitoring." });
});

app.listen(PORT, () => {
  console.log(`Connected to Backend, runs on ${PORT}`);
});

app.use(express.json()); //enable json req.body

app.use(
  express.urlencoded({
    extended: true,
  })
);

//routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);