// pages/ArticleDetailPage.js
import React from "react";
// import { useParams } from "react-router-dom";
// import Header from "../components/Header";
import NewsCard from "../components/news/NewsCard";
import heroImage1 from '../images/hero-image-1.png';
import heroImage2 from '../images/hero-image-2.png';
import heroImage3 from '../images/hero-image-3.png';
import heroImage4 from '../images/hero-image-4.png';

const articles = [
  {
    id: 1,
    title: "Breaking News 1",
    summary: "This is the summary of the first article.",
    imageUrl: heroImage1,
    content: "Full content of the first article."
  },
  {
    id: 2,
    title: "Breaking News 2",
    summary: "This is the summary of the second article.",
    imageUrl: heroImage2,
    content: "Full content of the second article."
  },
  {
    id: 3,
    title: "Breaking News 3",
    summary: "This is the summary of the third article.",
    imageUrl: heroImage3,
    content: "Full content of the third article."
  },
  {
    id: 4,
    title: "Breaking News 4",
    summary: "This is the summary of the fourth article.",
    imageUrl: heroImage4,
    content: "Full content of the fourth article."
  }
];

const NewsPage = () => {
  return (
    <div className="container mx-auto text-primary-dark dark:text-primary-light">
      <h2 className="text-center text-2xl font-bold mb-6">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
