
const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

/* These routes are the main page of your app.use() that is 
located in your app.js file. 
For example, if your current page is index/posts, 
this request will be for index/posts/numberone
 */

router.get('/', (req, res) => {
  res.send('We are on posts!');
});


router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title, 
    description: req.body.description
  });

  post.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({ message: err });
  });
  res.status(200).send("Request success");
});



module.exports = router;