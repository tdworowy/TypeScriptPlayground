import * as express from 'express'
var router = express.Router()

router.get("/", (req, res, next)=>{
    res.render('index', {title: "Express and Aurelia"})
})

export {router}