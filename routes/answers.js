const express=require('express');
const router=express.Router();
const Answer=require('../models/answer');
router.get('/', async(req,res)=>{
  try {
      const answer=await Answer.find();
      res.send(answer)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{
   const answer=new Answer({
     
    answer:req.body.answer,
    questionid:req.body.questionid
      
   })
   try{
     const a1=await answer.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const answer = await Answer.findById(req.params.id)
         res.json(answer)
  }catch(err){
      res.send('Error ' + err)
  }
})

router.patch('/:id',async(req,res)=> {
  try{
      const answer = await Answer.findById(req.params.id) 
      answer.answer= req.body.answer,
      answer.questionid= req.body.questionid
     

      const a1 = await answer.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const answer = await Answer.findById(req.params.id) 
    
      const a1 = await answer.remove()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;