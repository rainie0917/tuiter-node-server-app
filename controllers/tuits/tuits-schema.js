import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  topic: String,
  userName: String,
  image: String,
  title: String,
  time: Date,
  liked: Boolean,
  dislikes: Number,
  likes: Number,
  disliked: Boolean,
  retuits: Number,
  replies: Number,
  handle: String,
}, {collection: 'tuits'});
export default schema;

