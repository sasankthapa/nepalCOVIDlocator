const express=require('express')
const Entry=require('./models/entry')

const router=express.Router()

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