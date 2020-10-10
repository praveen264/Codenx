const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    questionid:{
        type:String,
        required:true,
        unique:true
    },
    question:{
        type:String,
        required:true,
        unique:true
       
    }
});


module.exports=mongoose.model('Question',alienSchema);