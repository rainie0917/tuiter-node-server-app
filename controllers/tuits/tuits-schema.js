import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  topic: String,
  liked: Boolean,
  dislikes: Number,
  likes: Number,
  disliked: Boolean,
  retuits: Number,
  replies: Number,
  handle: String,
}, {collection: 'tuits'});
export default schema;

