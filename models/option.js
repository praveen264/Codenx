const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    optiontext:{
        type:String,
        required:true
        
    },
    questionid:{
        type:String,
        required:true
      
       
    }
});


module.exports=mongoose.model('Option',alienSchema);