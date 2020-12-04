const mongoose = require('mongoose');

const HoleMasterSchema = mongoose.Schema({
    course_id:{
        type:Number,
        required:true
    },
    hole_id:{
        type:number
    },
    hole_num:{
        type:Number,
        required:true
    },
    image_link:{
        type:String,
        required:true
      }
    
     
});
 const Put = module.exports = mongoose.model('Put',HoleMasterSchema );