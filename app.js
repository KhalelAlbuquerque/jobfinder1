const express       = require("express")
const exphbs        = require("express-handlebars")
const app           = express()
const path          = require('path')
const db            = require('./db/connection')
const bodyParser    = require("body-parser")

const port = 3000;



app.listen(port, ()=>{
    console.log("Rodando o servidor :)")
})



//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))


// handle bars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')


// static folder
app.use(express.static(path.join(__dirname, 'public')))

//db connection
db.authenticate().then(()=>{
    console.log("Sucesso ao conectar ao DB")
}).catch(err=>{
    console.log("Ocorreu um erro ao conectar", err)
})



//routes
app.get('/', (req,res)=>{
    res.render('index')
})


//rotas Jobs
app.use('/jobs', require('./routes/jobs'))