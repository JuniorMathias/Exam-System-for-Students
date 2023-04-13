require("dotenv").config()

const express = require('express');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT;

const app = express();


// config JSON and form data responses
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//Solve CORS 181

app.use(cors({credentials: true, origin: "https://localhost:3000"}))

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//DB CONNECTION
require("./config/db.js");

// routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});