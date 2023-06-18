import React from "react";

export const BlogPosts = () => {
  // Assuming you have a blogPosts array with objects containing blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      author: "John Doe",
      date: "June 1, 2023",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      title: "Blog Post 2",
      author: "Jane Smith",
      date: "June 3, 2023",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 3,
      title: "Blog Post 3",
      author: "Bob Johnson",
      date: "June 5, 2023",
      content: "Lorem ipsum dolor sit amet...",
    },
    // Add more blog post objects as needed
  ];

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              By {post.author} | {post.date}
            </p>
            <p className="text-gray-700">{post.content}</p>
            {/* Add more blog post details or link to full post */}
          </div>
        ))}
      </div>
    </section>
  );
};
