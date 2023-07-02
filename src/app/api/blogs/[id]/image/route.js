import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const blog = await Blog.findById(params.id);

    return new Response(blog.image);
  } catch (err) {}
};
