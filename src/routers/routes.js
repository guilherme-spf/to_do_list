import express from "express"
import res from "express/lib/response"
import {
    getIndex,
    postCriar
} from "../routers/controller/controlador.js"

export const router = express.Router()

router.get('/', (req,res) => {
    res.render('index.ejs',getIndex)
}) 
router.post('/add', postCriar)