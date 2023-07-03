import moment from "moment";
import Image from "next/image";

const SingleBlog = ({ blog }) => {
  return (
    <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
      <Image
        src={`http://localhost:3001/api/blogs/${blog._id}/image`}
        class="aspect-video w-full object-cover"
        alt=""
        width={300}
        height={300}
      />
      <div class="p-4">
        <p class="mb-1 text-sm text-primary-500">
          No Category •{" "}
          <time>{moment(blog.createdAt).format("DD MMM YYYY")}</time>
        </p>
        <h3 class="text-xl font-medium text-gray-900">{blog.title}</h3>
        <p class="mt-1 text-gray-500">{blog.description}</p>
        <div class="mt-4 flex gap-2">
          {blog.isFeatured && (
            <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
