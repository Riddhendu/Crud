const express = require('express');
const router = express.Router();
const Post = require('../models/CourseMaster');

// To fetch the data
router.get('/',  (req,res,next)=>{
     Post.find()
     .populate('Homecourse_Id')
     .then((posts)=>{
         res.json(posts)
     })
     .catch(err => console.log(err))
});
//  To put some data into database

router.post('/add', (req,res,next) => {
    const courseid = req.body.courseid;
    const coursename =req.body.coursename;
    const city = req.body.city;
    const record_Holder = req.body.record_Holder;

    let newPost = new Post ({
        courseid: courseid,
        coursename: coursename,
        city: city,
        record_Holder:record_Holder
    });
    newPost.save()
     .then(post => {
         res.json(post);
     })
     .catch(err => console.log(err));
});
//To update data
router.put('/update/:id', (req,res,next) => {
    //grab the id of the post
    let id= req.params.id;
    //find the post by ID from the database
    Post.findById(id)
    .then(post => {
       post.courseid = req.body.courseid;
       post.courseName =req.body.courseName;
       post.city = req.body.city;
       post.record_Holder = req.body.record_Holder;
       post.save()
       .then(post =>{
           res.send({message:'Post updated successfully', status: 'success' , post: post})
       })
       .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}); 
// Make delete request

router.delete('/:id', (req,res,next) => {
    //grab the id of the post
    let id= req.params.id;
    //find the post by ID from the database
    Post.findById(id)
    .then(post => {
       post.delete()
       .then(post =>{
           res.send({message:'Post deleted successfully', status: 'success' , post: post})
       })
       .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}); 

module.exports = router;