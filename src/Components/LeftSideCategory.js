import React from "react";
import { Link } from "react-router-dom";

const LeftSideCategory = ({ singleCategory }) => {
  const { name } = singleCategory;
  return (
    <div className="">
      <ul className="">
        <Link to="/">
          <li className="text-base bg-gray-900 rounded-md text-white hover:bg-indigo-600  mx-2 my-2 py-2 px-2">
            {name}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LeftSideCategory;
