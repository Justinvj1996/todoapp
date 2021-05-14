const { json } = require('express');
const express=require('express')
const dataService= require("./service/dataservice")
const app=express()
const session = require('express-session');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
app.use(session({ // act as application middleware
    secret: 'randomsecurestring',
    resave: false,
    saveUninitialized: false
}))
app.use(express.json());
app.post('/addTask', (req, res) => {
   dataService.addTask(req.body.title, req.body.description)
   .then(result=>{
       res.json(result)
   })   
})
app.get('/viewTask1',(req,res)=>{
    dataService.viewTask1()
    .then(result=>{
        res.json(result)
    })
})
app.get('/viewTask2',(req,res)=>{
    dataService.viewTask2()
    .then(result=>{
        res.json(result)
    })
})
app.post('/updateTask1', (req, res) => {
    dataService.updateTask1(req.body)
    .then(result=>{
        res.json(result)
    })   
 })
 app.delete('/deleteTask1', (req, res) => {
    dataService.deleteTask1()
    .then(result=>{
        res.json(result)
    })   
 })
 app.post('/updateTask2', (req, res) => {
    dataService.updateTask2(req.body)
    .then(result=>{
        res.json(result)
    })   
 })
 app.delete('/deleteTask2', (req, res) => {
    dataService.deleteTask2()
    .then(result=>{
        res.json(result)
    })   
 })
app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})
