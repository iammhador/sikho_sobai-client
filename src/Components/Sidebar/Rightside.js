import React from "react";
import { Link } from "react-router-dom";

const Rightside = ({ course }) => {
  const {
    id,
    title,
    category,
    short_description,
    ratting,
    student,
    starting_time,
    image,
  } = course;

  return (
    <div>
      <div className="relative block overflow-hidden rounded-lg border bg-gray-50 border-gray-800 p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-rose-700 via-indigo-500 to-rose-700"></span>

        <div className="justify-between sm:flex">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{category}</p>
          </div>

          <div className="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt=""
              src={image}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500">{short_description}</p>
        </div>

        <dl className="mt-6 flex justify-between">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">{starting_time}</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Student</dt>
            <dd className="text-xs text-gray-500">{student}</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Rating</dt>
            <dd className="text-xs text-gray-500">{ratting}</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse  sm:ml-6">
            <Link to={`/courses/${id}`} state={{ title }}>
              <button className="py-2 px-3 bg-rose-700 text-gray-50 rounded-md hover:bg-indigo-600">
                Details
              </button>
            </Link>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Rightside;
