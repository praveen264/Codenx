const express=require('express');
const router=express.Router();
const Option=require('../models/option');
router.get('/', async(req,res)=>{
  try {
      const option=await Option.find();
      res.send(option)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{
   const option=new Option({
    optiontext: req.body.optiontext,
    questionid: req.body.questionid
    
   })
   try{
     const a1=await option.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const option = await Option.findById(req.params.id)
         res.json(option)
  }catch(err){
      res.send('Error ' + err)
  }
})

router.patch('/:id',async(req,res)=> {
  try{
      const option = await Option.findById(req.params.id) 
   
      option.optiontext= req.body.optiontext,
      option.questionid= req.body.questionid
    

      const a1 = await option.save()
    
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const option = await Option.findById(req.params.id) 
    
      const a1 = await option.remove()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;