const express=require('express')
require('./mongoose/mongoose');

const PORT=process.env.PORT||3000

const assetRouter=require('./routers/assetRouter')
const databaseRouter=require('./routers/databaseRouter')
const formRouter=require('./routers/formRouter');
const newsRouter=require('./routers/newsRouter')

const cors=require('cors')
const app=express()

app.use(cors());
app.use(express.json())

app.get('/api/',(req,res)=>{
	res.send('hello')
});

app.use(assetRouter);
app.use(databaseRouter);
app.use(formRouter);
app.use(newsRouter);

app.listen(PORT,()=>{console.log(`Served on ${PORT}`)})
