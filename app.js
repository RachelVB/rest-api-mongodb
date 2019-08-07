
const mongoose = require('mongoose');
const express = require('express');
// Here we've imported in the express package and then we execute it.
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');


//MIDDLEWARE
/* Functions that execute when a spacific route are being coompleted. 
app.use('/posts', () => {
  console.log('Hello! This is middleware!')
});
*/
app.use(bodyParser.json());
/* By using the bodyParser this way, it will convert any request, 
this body parser will run.
Otherwise when we make our request to the server, 
the app will not be able to inperpret our request because it can't read it.
 */


// IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
/* These pages in app.use() are pages AFTER your home/main page. 
The pages that come in after these can be found in your post.js */

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home!');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
console.log('connected to DB!')
);
/* By importing our env file, we've hidden our username and password from 
  outside users.  */

  /* mongoose.connect("mongodb://localhost:3030", 
('mongodb://localhost:%3C3030'), 
  process.env.DB_CONNECTION, 
  { useNewUrlParser: false }, () => 
console.log('connected to DB!')
); */
  

//HOW DO WE START LISTENING TO THE SERVER?
app.listen(27017);

/* MongoDB User info
Username: Rachel
Password: andrew12  */