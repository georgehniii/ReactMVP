require("dotenv").config();
const express = require('express');
const req = require('express/lib/request');
const app = express();
const db = require('./public/queries');
const port = process.env.PORT || 5555;

app.listen(port,function(){
    console.log(`Listing on port ${port}`);
});
app.use(express.static('public'));
app.use(express.json());
app.get('/home/login', db.passCheck);
app.get('/home', db.getBlogs);
app.get('/blog', db.getBlogById);
app.post('/blog', db.createBlog);
app.patch('/blog/:id', db.updateItem);
app.delete('/blog/:id', db.deleteItem);
app.use((req,res) => {
res.status(404).send("Not Found");
});
