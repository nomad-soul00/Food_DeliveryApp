import express from 'express';

const displayRouter = express.Router();

displayRouter.post('/foodData', async(req,res)=>{
    try{
        res.send([global.food_items, global.food_category]);
    }catch(error){
        res.json({success: false, error})
    }
})


export default displayRouter;