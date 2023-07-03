import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const to = searchParams.get("to");
    const from = searchParams.get("from");

    const dbQuery = {};
    !!to &&
      !!from &&
      (dbQuery.createdAt = { $gte: new Date(from), $lt: new Date(to) });

    const blogs = await Blog.find(dbQuery);

    return NextResponse.json(blogs);
  } catch (err) {}
};
