import React from "react";
import SingleBlog from "./SingleBlog";

const BlogsList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogsList;
