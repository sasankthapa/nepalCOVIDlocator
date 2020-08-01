const path=require('path')
const express=require('express')
const router=express.Router();

router.get('/forms/submitNews',(req,res)=>{
    res.sendFile(path.join(__dirname,'../webforms/index.html'));
})

module.exports=router