const mongoose = require('mongoose');

const RoundDetailsSchema = mongoose.Schema({
    round_id:{
        type:mongoose.Schema.Types.ObjectId, ref: 'Master',
        required:true
    },
    hole_id:{
        type:mongoose.Schema.Types.ObjectId, ref: 'Put',
    },
    
      ball_1:{
        type:Number,
        required:true
      },
      ball_2:{
        type:Number,
        required:true},
       ball_3:{
            type:Number,
            required:true},
       ball_4:{
                type:Number,
                required:true
         }            
    
     
});
 const Patch = module.exports = mongoose.model('Patch',RoundDetailsSchema )