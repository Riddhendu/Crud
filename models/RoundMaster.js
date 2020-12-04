const mongoose = require('mongoose');

const RoundMasterSchema = mongoose.Schema({
    round_id:{
        type:Number,
        required:true
    },
    course_id:{
        type:Number,
    },
     date:{
        type:Date,
        required: true
      },
      starting_hole:{
        type: Number,
        required:true  
      },
    
      ball1:{
        type:mongoose.Schema.Types.ObjectId, ref: 'SubsMaster',
        required:true
      },
      ball_2:{
        type:mongoose.Schema.Types.ObjectId, ref: 'SubsMaster',
        required:true},
       ball_3:{
            type:mongoose.Schema.Types.ObjectId, ref: 'SubsMaster',
            required:true},
       ball_4:{
            type:mongoose.Schema.Types.ObjectId, ref: 'SubsMaster',
            required:true
         }            
    
     
});
 const Master = module.exports = mongoose.model('Master',RoundMasterSchema )