import mongoose from 'mongoose';
const schema = mongoose.Schema({
  image: String,
  userName: String,
  handle: String,
  time: String,
  tuit: String,
  replies: Number,
  retuits: Number,
  liked: Boolean,
  likes: Number,
  dislikes: Number,
  disliked: Boolean,
  topic: String,
  title: String,
}, {collection: 'tuits'});
export default schema;


