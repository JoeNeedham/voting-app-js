const express = require("express");
const fs = require("fs").promises; // interacting with json file
const path = require("path");

const app = express();
const dataFile = path.join(__dirname, "data.json");

// Support POSTing form data with URL encoded
app.use(express.urlencoded({ extended: true }))

// async lets you use the read and write methods
app.get("/poll", async (req, res) => {
    let data = JSON.parse(await fs.readFile(dataFile, "utf-8"))
    const totalVotes = Object.values(data).reduce((total, n) => total += n, 0);

    console.log(totalVotes);

    res.end()
})

app.listen(3000, () => console.log("Server is running..."));