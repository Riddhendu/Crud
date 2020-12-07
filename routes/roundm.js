const express = require('express');
const router = express.Router();
const Post = require('../models/RoundMaster');


// To fetch the data
router.get('/',  (req,res,next)=>{
    Post.find()
    .populate('Round_id')
    .populate('subs_id')
    .then((posts)=>{
        res.json(posts)
    })
    .catch(err => console.log(err))
});
//  To put some data into database

router.post('/add', (req,res,next) => {
    const course_id =req.body.course_id;
    const date= req.body.date;
    const starting_hole = req.body.starting_hole;
    const ball_1 = req.body.ball_1;
    const ball_2 = req.body.ball_2;
    const ball_3= req.body.ball_3;
    const ball_4 = req.body.ball_4;

    let newPost = new Post ({
        course_id: course_id,
        date:date,
        starting_hole: starting_hole,
        ball_1: ball_1,
        ball_2:ball-2,
        ball_3:ball_3,
        ball_4:ball_4
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
       post.date =req.body.date;
       post.starting_hole = req.body.starting_hole;
       post.ball_1 = req.body.ball_1;
       post.ball_2 = req.body.ball_2;
       post.ball_3 = req.body.ball_3;
       post.ball_4 = req.body.ball_4;
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