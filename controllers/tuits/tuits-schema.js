import mongoose from 'mongoose';
const schema = mongoose.Schema({
  image: Buffer,
  topic: String,
  userName: String,
  title: String,
  liked: Boolean,
  dislikes: Number,
  likes: Number,
  disliked: Boolean,
  retuits: Number,
  replies: Number,
  handle: String,
  tuit: String,
}, {collection: 'tuits'});
export default schema;

