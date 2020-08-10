const fs=require('fs')
const express=require('express');

const path=process.env.JSON_PATH||'/home/sasank/BiggerProjects/NepalCOVIDLocator/datascripts/outputJsons/'

const daily=JSON.parse(fs.readFileSync(path+'daily.json'));
const districts=JSON.parse(fs.readFileSync(path+'DistrictsData.json'));
const hospitals=JSON.parse(fs.readFileSync(path+'hospitals.json'));
const nepal=JSON.parse(fs.readFileSync(path+'npData.json'))
const lastupdate=fs.readFileSync(path+'lastupdate.txt')
var message=''
try{
    message=fs.readFileSync(path+'message.txt')
}catch(e){
}

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
router.get('/api/nepal',(req,res)=>{
    res.send(nepal)
})
router.get('/api/info/lastupdate',(req,res)=>{
    res.send(lastupdate)
})
router.get('/api/info/message',(req,res)=>{
    res.send(message)
})

module.exports=router
