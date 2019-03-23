const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose.connect(db , { useNewUrlParser: true }).then(
    () => console.log('db connected to mongo')
).catch(err => console.log(err));

app.get('/' , (req, res) => {
    console.log("yay");
    res.send({ok:"ok"});
});

// use routes 
app.use('/api/users' , users);
app.use('/api/profile' , profile);
app.use('/api/posts' , posts);

const port = process.env.PORT || 5000;
app.listen(port , () => console.log(`Listening to port ${port}`));