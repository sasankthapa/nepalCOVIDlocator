const express=require('express')
require('./mongoose/mongoose');

const cors=require('cors')
const Entry=require('./models/entry')
const app=express()
app.use(express.json())

const PORT=process.env.PORT||3000

app.use(cors());

app.get('/api/',(req,res)=>{
	res.send('hello')
});

app.get('/api/entry', async(req,res)=>{
    try{
        const entries=await Entry.find({})
        res.status(200).send(entries);
    }catch(e){
        res.status(400).send()
    }
})

app.post('/api/entry', async(req,res)=>{
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

app.listen(PORT,()=>{console.log(`Served on ${PORT}`)})
