const methodOverride = require("method-override");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();
const app = express();
/* controllers implementation */
const {
  indexGet,
  aboutGet,
  addPostGet,
  postIdGet,
  postIdDelete,
  postIdPatch,
  postIdPut,
  postAddPost,
  notFound,
} = require("./controller/agnosCont");

/* database connection */
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* config */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
/* config */

/* get requests */
app.get("/", indexGet);
app.get("/about", aboutGet);
app.get("/add_post", addPostGet);
app.get("/post/:_id", postIdGet);
app.get("*", notFound);

/* post patch and put requests */
app.post("/add_post", multer().none(), postAddPost);
app.patch("/post/:_id", multer().none(), postIdPatch);
app.put("/post/:_id", postIdPut);

/* delete requests */
app.delete("/post/:_id", postIdDelete);

/* port listens  */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listens on port ${3000}`);
});
