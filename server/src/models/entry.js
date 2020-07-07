const mongoose=require('mongoose');

const entrySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    phonenumber:{
        type:Number,
        unique:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    lat:{
        type:Number,
        required:true
    },
    long:{
        type:Number,
        required:true
    },
    DISTRICT:{
        type:String,
        required:true
    },
    message:{
        type:String
    }
})

entrySchema.methods.toJSON=function(){
    const entry=this
    const userObject=entry.toObject();

    delete userObject._id
    delete userObject._v
    delete userObject.name
    delete userObject.age
    delete userObject.phonenumber

    return userObject
}

const Entry=mongoose.model('Entry',entrySchema)

module.exports=Entry
