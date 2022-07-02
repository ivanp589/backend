const express = require('express')
const statsImport = require('../models/StatsModel')

const router = express.Router()





//get all workouts
router.get('/', (req,res) => {
    res.json({msg: 'get all workouts'})
})

//get a single workout
router.get('/:id',(req,res)=>{
    res.json({msg: 'get a single workout'})
})

//post a new workout    <------------------ only working function so far 7-1-22 *************
router.post('/', async (req, res) =>{
    const {reps,sets,weight,workout} = req.body
    try {
        const newStats = await statsImport.create({reps,sets,weight,workout})
        res.status(200).json(newStats)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg: 'delete workout'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg: 'update a workout'})
})

module.exports = router 
