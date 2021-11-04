let React = require("react");
let DefaultLayout = require("./partials/default");

function Index(props) {
  const { posts, pagination, isOlder } = props;
  const { prevPage, page, nextPage } = pagination;

  return (
    <DefaultLayout title={props.title}>
      <div>
        <header
          className="masthead"
          style={{ backgroundImage: `url("img/home-bg.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Clean Blog</h1>
                  <span className="subheading">
                    A Blog Theme by Start Bootstrap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div>
                {posts.map((item, index) => {
                  const postID = "/post/" + item._id;
                  return (
                    <div className="post-preview">
                      <a href={postID}>
                        <h2 className="post-title">{item.title}</h2>
                        <h3 className="post-subtitle">{item.detail}</h3>
                      </a>
                      <p className="post-meta">
                        Posted by
                        <a href="#"> Ali Özgenç </a>
                        {new Date(item.dateCreated).toLocaleDateString()}
                      </p>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="clearfix">
                {isOlder || (
                  <div>
                    <a
                      className="btn btn-primary float-right"
                      href={`/?older=${pagination.totalDocs}`}
                    >
                      Older Posts &rarr;
                    </a>
                    <nav
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ul>
                        {!prevPage || (
                          <a
                            style={{
                              padding: "5px",
                              width: "5px",
                              height: "5px",
                              margin: "5px",
                            }}
                            href={`/?page=${prevPage}`}
                          >
                            {prevPage}
                          </a>
                        )}
                        {!page || (
                          <a
                            style={{
                              padding: "5px",
                              width: "5px",
                              height: "5px",
                              margin: "5px",
                            }}
                            href={`/?page=${page}`}
                          >
                            {page}
                          </a>
                        )}
                        {!nextPage || (
                          <a
                            style={{
                              padding: "5px",
                              width: "5px",
                              height: "5px",
                              margin: "5px",
                            }}
                            href={`/?page=${nextPage}`}
                          >
                            {nextPage}
                          </a>
                        )}
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
module.exports = Index;
