import BlogsList from "@/components/BlogsList";
import { useRouter, useParams } from "next/navigation";
import React from "react";

const fetchBlogs = async (year, month) => {
  const from = new Date(year, month, 1).toDateString();
  const to = new Date(year, month, 30).toDateString();

  const res = await fetch(
    `http://localhost:3001/api/blogs?from=${from}&to=${to}`,
    {
      cache: "no-cache",
    }
  );

  return res.json();
};

const FilteredBlogs = async ({ params }) => {
  const [year, month] = params.slugs;
  const blogs = await fetchBlogs(year, month);

  return (
    <div>
      <BlogsList blogs={blogs} year={year} month={month} />
    </div>
  );
};

export default FilteredBlogs;
