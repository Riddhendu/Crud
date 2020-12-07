const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const {mongoUrl} = require('./db');

//Database Connection

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(() => {
    console.log("Connected successfully")
 })
  .catch((err) => {
    console.log("Unable to connect with database",err)
 });
 //Defining Port
const port = process.env.PORT || 3000;

//Initialize cors middleware

app.use(cors());


//Initialize body-parser middleware
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('Hello')
});

const postRoutes = require('./routes/post');
const courseRoutes = require('./routes/course');
const holeRoutes = require('./routes/hole');
const roundmRoutes = require('./routes/roundm');
const roundDRoutes = require('./routes/roundD');

app.use('/api/posts',postRoutes);
app.use('/courses',courseRoutes);
app.use('/holes',holeRoutes);
app.use('/roundmaster',roundmRoutes);
app.use('/rounddetails',roundDRoutes);



app.listen(port,()=>{
    console.log('Server running'+ port)
});

