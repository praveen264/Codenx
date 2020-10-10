const express=require('express');
const router=express.Router();
const Question=require('../models/question');
router.get('/', async(req,res)=>{
  try {
      const question=await Question.find();
      res.send(question)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{

   const question=new Question({
       questionid: req.body.questionid,
       question: req.body.question
      
   })
   try{
     const a1=await question.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const question = await Question.findById(req.params.id)
         res.json(question)
  }catch(err){
      res.send('Error ' + err)
  }
})

router.patch('/:id',async(req,res)=> {
  try{
      const question = await Question.findById(req.params.id) 
      //console.log(question.params.id);
      question.questionid= req.body.questionid,
      question.question= req.body.question

      const a1 = await question.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const question = await Question.findById(req.params.id) 
    
      const a1 = await question.remove()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;