import React from "react";
import ListHeader from "./ListHeader";
import SingleBlog from "./SingleBlog";

const BlogsList = ({ blogs, year, month }) => {
  return (
    <div className="flex flex-col gap-10">
      <ListHeader year={year} month={month} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
