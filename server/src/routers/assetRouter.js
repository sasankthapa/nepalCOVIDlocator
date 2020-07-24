const fs=require('fs')
const express=require('express');

const path='/home/sasank/BiggerProjects/NepalCOVIDLocator/datascripts/outputJsons/'

const daily=JSON.parse(fs.readFileSync(path+'daily.json'));
const districts=JSON.parse(fs.readFileSync(path+'DistrictsData.json'));
const hospitals=JSON.parse(fs.readFileSync(path+'hospitals.json'));

const router=express.Router()

router.get('/api/daily',(req,res)=>{
    res.send(daily)
})
router.get('/api/districts',(req,res)=>{
    res.send(districts)
})
router.get('/api/hospitals',(req,res)=>{
    res.send(hospitals)
})
module.exports=router