const express=require('express')
const Entry=require('../models/entry')
const News=require('../models/news')

const router=express.Router()

router.get('/api/allNews',async(req,res)=>{
    try{
        const news=await News.find({})
        res.status(200).send(news);
    }catch(e){
        res.status(400).send()
    } 
})

router.post('/api/allNews',async(req,res)=>{
    console.log(req.body);
    const news=new News(req.body);
    try{
        await news.save();
        res.status(201).send(news);
    }catch(e){
        console.log(e)
        res.status(400).send();
    }
})

router.get('/api/entry', async(req,res)=>{
    try{
        const entries=await Entry.find({})
        res.status(200).send(entries);
    }catch(e){
        res.status(400).send()
    }
})

router.post('/api/entry', async(req,res)=>{
    console.log(req.body);
    const entry=new Entry(req.body);
    try{
        await entry.save()
        res.status(201).send(entry);
    }catch(e){
        console.log(e)
        if(e.code===11000){
            res.status(400).send("Someone with that number already registered");
        }
        res.status(400).send()
    }
})

module.exports=router