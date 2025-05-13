import Link from 'next/link';
import React from 'react'
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';

const blogs = [
    {
      title: "How Tailwind CSS Boosts Productivity",
      summary: "Learn how Tailwind’s utility-first approach speeds up frontend development.",
      author: "Alice Johnson",
      date: "May 1, 2025",
      image: "https://i.pinimg.com/736x/a2/e4/cd/a2e4cd9b8a67082f633a678bef14f5d7.jpg",
    },
    {
      title: "Top 5 Tailwind Components You Should Know",
      summary: "A quick guide to some of the most useful Tailwind UI components.",
      author: "Robert Lee",
      date: "April 24, 2025",
      image: "https://i.pinimg.com/736x/39/d6/9c/39d69c4c6d19f20da09ea313eb59f052.jpg",
    },
    {
      title: "Dark Mode in Tailwind: Best Practices",
      summary: "Explore the simplest ways to support dark mode with Tailwind CSS.",
      author: "Emily Clark",
      date: "March 15, 2025",
      image: "https://i.pinimg.com/736x/f4/f6/41/f4f64147f185bceeaa3f629af3820643.jpg",
    },
    {
      title: "Responsive Design with Tailwind CSS",
      summary: "Master the art of responsive design using Tailwind’s utility classes.",
      author: "Michael Brown",
      date: "February 10, 2025",
        image: "https://i.pinimg.com/736x/02/de/bd/02debdb10482b5a35edc1548049d72fd.jpg",
    },
  ];
  

const Blog = () => {
  return (
    <div> 
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Latest Blog Posts</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-300">
        Discover fresh content and insights from our team
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
              {blog.summary}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              By {blog.author} · {blog.date}
            </div>
            <Link href={`/blogpost/${blog.slug}`} className="block mt-4">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  )
}

export default Blog