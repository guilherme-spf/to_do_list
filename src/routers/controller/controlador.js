import {connection} from '../database/connection.js'
import { tarefas } from '../model/lista.js'

export const getIndex = async (req,res) => {
    try {
        const list = await tarefas.findAll()
        res.render('index.ejs', {list})
    } catch (error) {
        res.send(error.message)
    }
}

export const postCriar = async (req, res) => {
    try {
        const { tarefa } = req.body
        await variados.create({
            tarefa
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.send(err.message)
    }
}