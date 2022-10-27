import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold tracking-tight text-rose-700 sm:text-4xl sm:leading-none">
              Make Your Dream With
              <br className="hidden md:block" />{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Sikho Sobai
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sikho Sobai is online base education platform. We connected to our
              student and teach them best skills on the fields. Sikho Sobai is
              not a institute, It's a home of our students.
            </p>
          </div>
          <div className="flex items-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-rose-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
