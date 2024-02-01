const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

let blogs = [];

app.post('/postblog', (req, res) => {
    console.log(req.body, "req.body");
    blogs.push(req.body);
    res.send(blogs);  
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});