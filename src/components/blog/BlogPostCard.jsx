// components/BlogPostCard.js
import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" /> */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-700 mt-2">{post.excerpt}</p>
        {/* <a href={`/posts/${post.id}`} className="text-blue-500 mt-4 inline-block">Read More</a> */}
      </div>
    </div>
  );
};

export default BlogPostCard;
