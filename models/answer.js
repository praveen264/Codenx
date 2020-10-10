const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    answer:{
        type:String,
        required:true,
        unique:true
    },
    questionid:{
        type:String,
        required:true,
        unique:true
       
    }
});


module.exports=mongoose.model('Answer',alienSchema);