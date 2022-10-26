import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { image, name, description, id } = category;
  console.log(id);
  return (
    <div>
      <div className=" max-w-4xl rounded-md shadow-2xl dark:bg-gray-900 dark:text-gray-100 ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">{name} : </h2>
            <p className="pt-1 text-gray-300">{description.slice(0, 199)}.</p>
          </div>
          <Link
            to={`/category/${id}`}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-rose-700 dark:text-gray-100 hover:bg-indigo-600"
          >
            Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
