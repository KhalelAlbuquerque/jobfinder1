const express       = require('express')
const router        = express.Router()
const Job           = require("../models/Job")

router.get('/test', (req,res)=>{
    res.send("Test 1 - Passed")
})

router.get('/add', (req,res)=>{
    res.render('add')
})

//Adicionar job
router.post('/add', (req,res)=>{

    let {title, salary, company, description, email, new_job} = req.body
    
    //inserir
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    }).then(()=>{
        res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })

})

module.exports=router