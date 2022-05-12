import express from 'express'
import path from 'path'
//import dotenv from 'dotenv'
// import {router} from './src/routers/routes'
 
//dotenv.config()

const porta = process.env.PORT || 3001

const list =[
    {
        id: 1,
        tarefa: 'Comprar arroz no mercado' 
    },{
        id: 2,
        tarefa: 'Mandar lavar o carro' 
    }
]

const app = express()
const port = 3001
let __dirname = path.resolve(path.dirname(''))

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res) => {
    res.render('index.ejs', {list})
})
app.post('/add', (req, res) => {
    const fazer = req.body;
    fazer.id =list.length + 1;
    list.push(fazer)
    res.redirect('/')
})



app.listen(port, () => {
    console.log(`Pagina rodando em http://localhost:${port}`)
})

