const mongoose = require('mongoose');

const SubscriptionMasterSchema = mongoose.Schema({
    subs_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    email:{
        type:String,
    },
    mobile:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
      },
      Dob:{
        type:Date,
        
      },
    
      Homecourse_Id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Customer'
      },
});
 const SubsMaster = module.exports = mongoose.model('SubsMaster',SubscriptionMasterSchema );