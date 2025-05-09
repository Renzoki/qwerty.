const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 3000;

app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/keys/get", (req, res) => {
    const keys = require("./keys.json")
    res.send(keys)
})

app.get("/", (req, res) => {
    res.render("keyTest")
})

app.get("/typeracer", (req, res) => {
    res.render("typeracer")
})

app.listen(PORT, () => {
    console.log(`Now listening at ${PORT}`)
})