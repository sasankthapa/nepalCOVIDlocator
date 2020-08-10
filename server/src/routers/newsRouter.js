const fs=require('fs');
const express=require('express')

const PATH=process.env.JSON_PATH;

const annapurnaNews=JSON.parse(fs.readFileSync(PATH+'annapurnaNews.json'))
const ktmpostNews=JSON.parse(fs.readFileSync(PATH+'ktmpostNews.json'))
const ekantipurNews=JSON.parse(fs.readFileSync(PATH+'ekantipurNews.json'))

const router=express.Router();

router.get('/api/news/annapurna',async(req,res)=>{
    res.send(annapurnaNews)
})

router.get('/api/news/ekantipur',async(req,res)=>{
    res.send(ekantipurNews)
})

router.get('/api/news/ktmpost',async(req,res)=>{
    res.send(ktmpostNews)
})

module.exports=router;