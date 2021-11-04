const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

/* mongodb post schema */
const Post = Schema({
  title: String,
  detail: String,
  dateCreated: { type: Date, default: Date.now },
});

Post.plugin(mongoosePaginate);

module.exports = model("post", Post);
