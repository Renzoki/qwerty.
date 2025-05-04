const express = require("express")
const path = require("path")
const app = express()

const PORT = 3000

app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/getKeys", (req, res) => {
    const keys = require("./keys.json")
    console.log(keys)
    res.send(keys)
})

app.get("/testKeys", (req, res) => {
    res.render("keyTest", { keyboardTester: true})
})

app.listen(PORT, () => {
    console.log(`Now listening at ${PORT}`)
})