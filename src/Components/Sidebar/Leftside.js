import React, { useState } from "react";
import { useEffect } from "react";
import LeftSideCategory from "../LeftSideCategory";
import {
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Leftside = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://sikho-sobai-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h3 className="text-center text-rose-700 uppercase text-sm font-semibold underline mb-3">
        All Categories
      </h3>
      <div>
        {category.map((singleCategory) => (
          <LeftSideCategory
            key={singleCategory.id}
            singleCategory={singleCategory}
          />
        ))}
      </div>
      <div>
        <h3 className="text-center text-rose-700 uppercase text-sm font-semibold underline mt-8 mb-3">
          Share
        </h3>
        <div>
          <a
            href="https://www.facebook.com/"
            className="flex items-center pl-2 text-base text-blue-600"
          >
            <FaFacebook className="mr-1" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            className="flex items-center pl-2 text-base text-pink-600"
          >
            <FaInstagram className="mr-1" /> instagram
          </a>
          <a
            href="https://twitter.com/"
            className="flex items-center pl-2 text-base text-blue-600"
          >
            <FaTwitter className="mr-1" /> Twitter
          </a>
          <a
            href="https://www.reddit.com/"
            className="flex items-center pl-2 text-base text-orange-600"
          >
            <FaReddit className="mr-1" /> Reddit
          </a>
          <a
            href="https://medium.com/"
            className="flex items-center pl-2 text-base text-black"
          >
            <FaMedium className="mr-1" /> Medium
          </a>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
