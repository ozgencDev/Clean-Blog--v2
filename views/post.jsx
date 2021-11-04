let React = require("react");
let DefaultLayout = require("./partials/default");

function Post(props) {
  const { idObject } = props;
  return (
    <DefaultLayout>
      <div>
        <header
          className="masthead"
          style={{ backgroundImage: `url("/img/post-bg.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-heading">
                  <h1>{idObject.title}</h1>
                  <span className="meta">
                    Posted by
                    <a href="#"> Ali Özgenç </a>
                    {new Date(idObject.dateCreated).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <p>{idObject.detail}</p>
                <a
                  href={`/post/${idObject._id}?_method=put`}
                  className="btn btn-primary p-2 mr-2 mb-4 tm-btn-animate tm-btn-download tm-icon-download rounded-pill"
                >
                  <span>Update</span>
                </a>
                <a
                  href={`/post/${idObject._id}?_method=delete`}
                  className="btn btn-danger p-2 mb-4 tm-btn-animate tm-btn-download tm-icon-download rounded-pill"
                >
                  <span>Delete</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </DefaultLayout>
  );
}

module.exports = Post;
