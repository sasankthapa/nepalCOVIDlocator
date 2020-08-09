const express=require('express')

const getPromiseFromAnnapurna=require('../webscaper/newsFromAnnapurna');
const getPromiseKtmPost=require('../webscaper/newsFromKtmPost');
const getPromiseEkantipur=require('../webscaper/newsFromEkantipur');

const router=express.Router();

router.get('/news/annapurna',async(req,res)=>{
    try{
        const news=await getPromiseFromAnnapurna();
        res.send(news);
    }catch(e){
        res.status(400).send();
    }
})

router.get('/news/ekantipur',async(req,res)=>{
    try{
        const news=await getPromiseEkantipur();
        res.send(news);
    }catch(e){
        res.status(400).send();
    }
})

router.get('/news/ktmpost',async(req,res)=>{
    try{
        const news=await getPromiseKtmPost();
        res.send(news);
    }catch(e){
        res.status(400).send();
    }
})

module.exports=router;