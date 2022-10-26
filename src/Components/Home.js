import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Testimonials from "./Testimonials";

const Home = () => {
  const categories = useLoaderData([]);
  return (
    <div>
      <Banner />
      <div className="py-28 bg-info">
        <h1 className="text-3xl text-rose-700 font-bold uppercase text-center lg:pb-10">
          Courses Categories
        </h1>
        {
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 justify-items-center px-10">
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        }
      </div>
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
