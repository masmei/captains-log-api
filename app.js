const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log("this code runs for every request")
    next();
})

const logsController = require("./controllers/logsController")

app.get("/", (req, res) => {
    res.send("Welcome to captain's log")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.redirect(404).json({error: "page not found"})
})


module.exports = app