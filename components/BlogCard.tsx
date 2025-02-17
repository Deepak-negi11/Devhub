import Link from "next/link";
import React from "react";

export interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  excerpt: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-xl dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-6 ">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        {blog.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {blog.author} &bull; {blog.date}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
        {blog.excerpt}
      </p>
      <div className="flex justify-between items-center">
        <Link
          href={`/blog/${blog.id}`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
        >
          Read More &rarr;
        </Link>
        <div className="flex space-x-4">
  
          <span className="flex items-center text-gray-600 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18l-1.45-1.32C4.4 12.36 1 9.28 1 5.5 1 3.42 2.42 2 4.5 2 6.09 2 7.5 2.81 8 4.09 8.5 2.81 9.91 2 11.5 2 13.58 2 15 3.42 15 5.5c0 3.78-3.4 6.86-7.55 11.18L10 18z" />
            </svg>
            {blog.likes}
          </span>
          <span className="flex items-center text-gray-600 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 10c0 3.866-3.582 7-8 7a8.887 8.887 0 01-3-.59L2 17l1.59-4A7.981 7.981 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
            </svg>
            {blog.comments}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
