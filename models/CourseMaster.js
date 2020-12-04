const mongoose = require('mongoose');
const { schema } = require('./HoleMaster');
const SubscriptionMaster = require('./SubscriptionMaster');

const CourseMasterSchema = mongoose.Schema({
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:SubsMaster,
        require:true
    },
    courseName:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    record_Holder:{
        type:String,
        required:true
      },
     
});
 const Customer = module.exports = mongoose.model('Customer', CourseMasterSchema);