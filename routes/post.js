const express = require('express');
const router = express.Router();
const Post = require('../models/SubscriptionMaster');

// To fetch the data
router.get('/',  (req,res,next)=>{
     Post.find()
     .populate('customerId')
     .then((posts)=>{
         res.json(posts)
     })
     .catch(err => console.log(err))
});
 
//  To put some data into database

router.post('/add', (req,res,next) => {
    const subs_id = req.body.subs_id;
    const email =req.body.email;
    const mobile = req.body.mobile;
    const name = req.body.name;
    let newPost = new Post ({
        subs_id: subs_id,
        email: email,
        mobile: mobile,
        name: name
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
       post.subs_id = req.body.subs_id;
       post.email =req.body.email;
       post.mobile = req.body.mobile;
       post.name = req.body.name;
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