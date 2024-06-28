"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import client, { urlFor } from "../../sanityClient/sanityClient";

const Page = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const query = `*[_type == "post" && author->name == "Team Auraeai"] | order(publishedAt desc){
        ...,
        mainImage,
        "imageUrl": mainImage.asset->url,
        "authorName": author->name,
        "authorImage": author->image.asset->url,
        slug,
        publishedAt
      }`;

      try {
        const data = await client.fetch(query);
        const articlesWithOptimizedImages = data.map((article) => ({
          ...article,
          imageUrl: urlFor(article.mainImage).width(800).url(),
          authorImageUrl: urlFor(article.authorImage).width(50).url(),
        }));

        setArticles(articlesWithOptimizedImages);
        setFilteredArticles(articlesWithOptimizedImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, options);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query)
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Aurae.ai Digital Health Library
      </h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search articles"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-1/4 p-2 border border-gray-400 focus:outline-none rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          filteredArticles.map((article) => (
            <Link key={article._id} href={`/blogs/${article.slug.current}`} passHref>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-800">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center">
                    <img
                      src={article.authorImageUrl}
                      alt={article.authorName}
                      className="w-10 h-10 rounded-full mr-2"
                      loading="lazy"
                    />
                    <p className="text-sm font-medium">
                      {article.authorName}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
