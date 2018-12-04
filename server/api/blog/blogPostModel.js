'use strict';

const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },

  //the mongo record ID for this blog post
  authorID:mongoose.Schema.Types.ObjectId,

},
  { timestamps: { createdAt: 'createdAt' } }
);


BlogPostSchema.methods.serialize = function () {
  return {
    id: this._id,
    title: this.title,
    createdAt: this.createdAt,
  };
};

// NOTE: mongoose will normalize the collection name: 
// lowercase(pluralize('BlogPostModel')) = 'blogpostmodels'
// when doing mongoimport use --collection 'blogpostmodels'
const BlogPostModel = mongoose.model('BlogPostModel', BlogPostSchema);

module.exports = BlogPostModel

