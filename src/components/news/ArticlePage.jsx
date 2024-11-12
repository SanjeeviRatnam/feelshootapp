import React from "react";
import { useLocation } from "react-router-dom";

const ArticlePage = () => {
  const location = useLocation();  // Access location object that contains the state
  const article = location.state; // The post object passed in Link's state

  if (!article) return <div>article not found.</div>;  // Handle if no post was passed

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700">{article.summary}</p>
    </div>
  );
};

export default ArticlePage;