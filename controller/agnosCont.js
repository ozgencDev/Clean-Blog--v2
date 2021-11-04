const Post = require("../models/Post");

/* make a query and renders index */
exports.indexGet = async (req, res) => {
  const query = await Post.paginate(
    {},
    { page: req.query.page || 1, limit: req.query.older || 3 }
  );
  console.log(query, req.query);
  res.render("index", {
    posts: query.docs,
    pagination: query,
    isOlder: req.query.older,
  });
};

/* renders about page */
exports.aboutGet = (req, res) => {
  res.render("about");
};

/* render add_post */
exports.addPostGet = (req, res) => {
  res.render("add_post");
};

/* Page renders based on a specific id */
exports.postIdGet = async (req, res) => {
  const queryID = await Post.findById(req.params);
  res.render("post", {
    idObject: queryID,
  });
};

/* delete post with specific id */
exports.postIdDelete = async (req, res) => {
  await Post.findByIdAndDelete(req.params._id);
  res.redirect("/");
};

/* edits an old post */
exports.postIdPatch = async (req, res) => {
  await Post.findByIdAndUpdate(req.params._id, req.body);
  res.redirect("/");
};

/* redirects to old post edit page */
exports.postIdPut = async (req, res) => {
  const editQueryID = await Post.findById(req.params._id);
  res.render("edit", { editObject: editQueryID });
};

/* saves post to database */
exports.postAddPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.notFound = (req, res) => {
  res.status(404).sendFile(`${__dirname}/public/html/404.html`);
};
