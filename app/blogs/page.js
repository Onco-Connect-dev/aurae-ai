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
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
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
            <Link
              key={article._id}
              href={`/blogs/${article.slug.current}`}
              passHref
            >
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
                  <h3 className="text-lg h-20 font-semibold mb-1">
                    {article.title}
                  </h3>
                  <div className="flex gap-1 items-center">
                    <div className="mt-1">
                      <svg
                        width="33"
                        height="27"
                        viewBox="0 0 44 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.39681 22.1128C3.14679 17.3869 2.18844 6.94896 8.35522 3.00391"
                          stroke="#DC7D57"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.22656 27.0457C6.12936 25.8814 7.85161 22.6897 7.51827 19.2378"
                          stroke="#DC7D57"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.10547 16.1549C7.4527 8.21001 13.9806 -5.61224 32.9393 4.64851"
                          stroke="#DC7D57"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M0.855469 39.7811L6.0639 33.4115M7.52226 30.5349C8.70284 28.8911 11.1473 24.6995 11.4807 21.0832C11.814 17.4669 11.6196 13.9602 11.4807 12.6589M12.314 9.37132C15.2307 2.79624 27.5226 2.38515 32.3144 9.3712C37.1061 16.3572 34.8144 21.9049 34.3978 22.1104M33.7728 24.7817C33.1477 28.0692 31.106 35.9593 27.9393 41.2194M35.6478 7.72755C37.8701 11.837 40.9812 22.4393 35.6478 31.9732M41.2729 23.9598L42.3146 28.2747C42.5229 28.8226 42.7313 30.1239 41.8979 30.9458C41.0646 31.7677 40.2312 32.1787 39.6062 32.5896C38.9812 33.0005 36.6478 37.8908 36.4811 40.1921M34.3978 35.8772L32.1061 40.603M3.77219 41.6304C7.10559 37.8634 13.814 29.4664 13.9807 26.0145M14.6057 22.727L14.8141 13.4808C14.953 11.6315 16.3558 8.01521 20.8558 8.34397C23.4948 8.41246 28.981 9.65899 29.8143 14.0972M30.856 16.7683C30.7171 21.0147 29.6893 30.4527 26.6893 34.2334M25.4393 36.9045L22.5225 42.0413M13.9807 48C17.6613 42.7262 24.8976 31.8499 24.3976 30.5349M25.6476 27.6583C26.4115 24.4392 27.5226 17.5902 26.481 14.7136C25.4393 11.837 20.4392 11.837 18.7725 14.0972C17.1058 16.3574 18.5641 18.0011 18.5641 18.0011M22.5225 15.33V22.727C22.5225 23.4119 22.5225 24.3707 22.1059 25.6036C21.6892 26.8364 19.7447 31.0828 18.7725 33.4115M10.8557 45.7398L17.5224 36.4936M7.10559 43.8905L9.60563 41.2194M11.4807 38.7538C14.1125 34.7813 19.3387 25.5625 19.1891 20.4668"
                          stroke="#DC7D57"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{article.authorName}</p>
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
