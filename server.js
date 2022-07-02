require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

const path = require('path')
const mongoose  = require('mongoose')
const app = express() //express app

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes)
app.use('/api/workouts',workoutRoutes)

//connect to database
const conn = mongoose.connect(process.env.MONGO_URI)
.then(()=>{ 
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db & listening on port',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
