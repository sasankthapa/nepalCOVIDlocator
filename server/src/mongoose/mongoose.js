const mongoose = require('mongoose');

console.log(process.env.MONGOB_URL);
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
},(e)=>{if(e){
    console.log("Could not connect");
}})
