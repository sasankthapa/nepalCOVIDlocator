const express=require('express')
// require('./mongoose/mongoose'); //database is not used currently

const PORT=process.env.PORT||3000

const assetRouter=require('./routers/assetRouter')
const cors=require('cors')
const app=express()

app.use(cors());
app.use(express.json())

app.get('/api/',(req,res)=>{
	res.send('hello')
});

app.use(assetRouter);

app.listen(PORT,()=>{console.log(`Served on ${PORT}`)})
