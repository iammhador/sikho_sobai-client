import React from "react";
import { useLoaderData } from "react-router-dom";
import Leftside from "./Sidebar/Leftside";
import Rightside from "./Sidebar/Rightside";

const Courses = () => {
  const courses = useLoaderData([]);

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold uppercase text-rose-700 text-center pb-10">
        Available All Courses
      </h2>
      <div className="md:flex md:flex-row sm:flex sm:flex-col">
        <div class="lg:grid-cols-2 lg:block">
          <Leftside />
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 md:mr-5  lg:mx-8">
          {courses.map((course) => (
            <Rightside key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
