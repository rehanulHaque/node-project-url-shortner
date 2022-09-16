const router = require("express").Router()
const ShortUrl = require("../model/model")

router.get("/", async (req, res) =>{
    const urls = await ShortUrl.find({})
    res.render("index", {shortUrls: urls})
})

router.post("/shortUrls", async (req, res)=>{
    console.log(req.body.full)
    await ShortUrl.create({full: req.body.fullUrl})
    res.redirect("/")
})

router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const short = await ShortUrl.findOne({short: id})
    res.redirect(short.full)
})
module.exports = router