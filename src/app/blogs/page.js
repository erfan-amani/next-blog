import BlogsList from "@/components/BlogsList";
import React from "react";

const fetchBlogs = async () => {
  const res = await fetch("http://localhost:3001/api/blogs", {
    cache: "no-cache",
  });

  return res.json();
};

const Blogs = async () => {
  const blogs = await fetchBlogs();

  return (
    <div>
      <BlogsList blogs={blogs} />
    </div>
  );
};

export default Blogs;
