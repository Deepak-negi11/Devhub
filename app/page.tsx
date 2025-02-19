"use client" ;



import React from "react";
import BlogCard, { Blog } from "../components/BlogCard";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { blogs } from "./blogs";

const Home: React.FC = () => {
  
  return (
    <>
  <NavBar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Latest Blogs
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
