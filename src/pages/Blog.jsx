import React from "react";
import Header from "../common/Header";
import { blogs } from "../Data/blogs";
import { Link } from "react-router-dom";

function Blog() {
  let allBlogs = blogs.map((v, i) => {
    return (
      <div className="blogItems" key={i}>
        <p>
          <h3>{v.title};</h3>
          {v.body};
        </p>
        <button>
          <Link to={`/blog/${v.id}`}>Read More</Link>
        </button>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <div className="block">
        <div className="container">{allBlogs}</div>
      </div>
    </div>
  );
}

export default Blog;
