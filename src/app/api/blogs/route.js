import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();

    const blogs = await Blog.find();

    return NextResponse.json(blogs);
  } catch (err) {}
};
