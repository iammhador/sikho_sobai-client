import React from "react";
import { useLoaderData } from "react-router-dom";
import MatchCourse from "./MatchCourse";

const CategoryMatchCourses = () => {
  const matchesCourses = useLoaderData([]);
  return (
    <div className="w-4/6  my-10 mx-auto ">
      {matchesCourses.map((mCourse) => (
        <MatchCourse key={mCourse.id} mCourse={mCourse} />
      ))}
    </div>
  );
};

export default CategoryMatchCourses;
