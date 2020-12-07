const express = require('express');
const router = express.Router();
const Post = require('../models/HoleMaster');

// To fetch the data
router.get('/',  (req,res,next)=>{
    Post.find()
    .populate('Hole_id')
    .then((posts)=>{
        res.json(posts)
    })
    .catch(err => console.log(err))
});
//  To put some data into database

router.post('/add', (req,res,next) => {
    const course_id =req.body.course_id;
    const hole_id= req.body.hole_id;
    const hole_num = req.body.hole_num;
    const par = req.body.par;
    const image_link = req.body.image_link;


    let newPost = new Post ({
        course_id: course_id,
        hole_id: hole_id,
        hole_num: hole_num,
        par: par,
        image_link:image_link
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
       post.course_id = req.body.course_id;
       post.hole_id =req.body.hole_id;
       post.hole_num = req.body.hole_num;
       post.par=req.body.par;
       post.image_link = req.body.image_link;
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
