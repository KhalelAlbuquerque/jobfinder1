const express = require("express")
const app = express()

const port = 3000;

app.listen(port, ()=>{
    console.log("Rodando o servidor :)")
})

app.get('/', (req,res)=>{
    res.send("Funcionando")
})