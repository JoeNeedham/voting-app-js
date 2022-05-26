const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const dataFile = path.join(__dirname, "data.json");

// Support POSTing form data with URL encoded
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => console.log("Server is running..."));