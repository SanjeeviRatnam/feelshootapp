// pages/BlogPage.js
import React from 'react';
import BlogPostCard from '../components/blog/BlogPostCard';

const posts = [
  {
    id: 1,
    title: "Building Your First Blog",
    excerpt: "MicroBird serves as an intermediary and technology provider under the Information Technology Act of 2000 and its associated rules. Content posted on the platform may originate from content providers or users. MicroBird does not exercise control over the content and does not guarantee its accuracy, validity, or legality. We expressly disclaim all warranties and shall not be liable for any civil or criminal violations arising from the content.",
    imageUrl: "https://via.placeholder.com/500x300",
  },
  {
    id: 2,
    title: "Building Your Second Blog",
    excerpt: "MicroBird strives to provide accurate and up-to-date information on its website. However, we do not guarantee the accuracy, completeness, or reliability of any information on the site. The content is for general informational purposes only and should not be considered professional advice. Users are encouraged to verify information and seek appropriate guidance before making decisions based on the content.",
    imageUrl: "https://via.placeholder.com/500x300",
  },
  {
    id: 3,
    title: "Building Your Third Blog",
    excerpt: "MicroBird operates as an intermediary and technology provider, recognized under the provisions of the Information Technology Act of 2000, along with its Rules. As an intermediary, Micro Bird does not own or control the content posted by users on its platform. We expressly disclaim all warranties and shall not be liable for any violations under civil or criminal law that may arise from the content.",
    imageUrl: "https://via.placeholder.com/500x300",
  },
  {
    id: 4,
    title: "Building Your fourth Blog",
    excerpt: "The website may contain links to third-party websites for additional information or resources. MicroBird does not endorse or control the content on these external sites and is not responsible for their accuracy, legality, or availability. Users access third-party websites at their own risk.",
    imageUrl: "https://via.placeholder.com/500x300",
  },
  {
    id: 5,
    title: "Building Your Fifth Blog",
    excerpt: "Users of the MicroBird website are responsible for the content they post, share, or upload. It is essential to comply with applicable laws, rules, regulations, policies, guidelines, and norms. MicroBird serves as an intermediary and is not responsible for any content posted by users. MicroBird reserves the right to publish, remove, or modify content at its discretion, with or without prior notice to users.",
    imageUrl: "https://via.placeholder.com/500x300",
  },
  {
    id: 6,
    title: "Building Your Sixth Blog",
    excerpt: "MicroBird reserves the right to disable or terminate user accounts, remove or disable content, and modify or discontinue the website at any time. Termination of user accounts or access may include the removal of content, and MicroBird is not liable for any loss of data or content resulting from such actions.",
    imageUrl: "https://via.placeholder.com/500x300",
  },
  // Add more posts here
];

const BlogPage = () => {
  return (
    <div className='text-primary-dark dark:text-primary-light'>
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
    </div>
  );
};

export default BlogPage;
