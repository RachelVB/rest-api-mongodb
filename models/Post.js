

const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  description: {
    type: String, 
    required: true
  }, 
  date: {
    type: Date, 
    default: Date.now
  }
});

/*  Another way we can use the Schema.

mongoose.Schema({
  username: String, 
  password: String
}); */


/* By exporting the schema this way, we are then posting it to
our database within mongoose. */
module.exports = mongoose.model('Posts', PostSchema);
