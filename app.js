const express       = require("express")
const app           = express()
const db            = require('./db/connection')
const bodyParser    = require("body-parser")

const port = 3000;



app.listen(port, ()=>{
    console.log("Rodando o servidor :)")
})



//db connection
db.authenticate().then(()=>{
    console.log("Sucesso ao conectar ao DB")
}).catch(err=>{
    console.log("Ocorreu um erro ao conectar", err)
})

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))


//routes
app.get('/', (req,res)=>{
    res.send("Passsado")
})


//rotas Jobs
app.use('/jobs', require('./routes/jobs'))