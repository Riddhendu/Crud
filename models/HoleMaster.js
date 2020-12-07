const mongoose = require('mongoose');

const HoleMasterSchema = mongoose.Schema({
    course_id:{
        type:Number,
        required:true
    },
    hole_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    hole_num:{
        type:Number,
        required:true
    },
    par:{
        type:Number,
        required:true
    },
    image_link:{
        type:String,
        required:true
      }
    
     
});
 const Hole = module.exports = mongoose.model('Hole',HoleMasterSchema );