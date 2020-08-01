const mongoose=require('mongoose')

const newsSchema=new mongoose.Schema({
    date:{
        type:String,
        trim:true
    },
    title:{
        type:String,
        maxlength:16,
        trim:true
    },
    body:{
        type:String,
        trim:true
    },
})

newsSchema.methods.toJSON=function(){
    const news=this
    const newsObject=news.toObject();

    delete newsObject._id
    delete newsObject.__v
    return newsObject
}

const News=mongoose.model('News',newsSchema)

module.exports=News
