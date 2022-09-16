const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser")
const router = require("./router/router")

mongoose.connect("mongodb://localhost:27017/shorturl").then(() => console.log("connected"))

app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs")

app.use("/", router)
app.listen(3000, () => console.log("running"))