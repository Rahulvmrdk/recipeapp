//import express
const express = require('express');
const MovieModel = require('./model/cusine.schema');
const cors = require('cors')
// const upload = multer({ desk})

//ini

const app = new express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

const controlRouter = require('./routes/cuisineRouter');
const multer = require('multer');
app.use('/cuisine',controlRouter)

// port
 app.listen('3001',()=>{
    console.log('port 3001 is activated');
 })
