import React from "react";
import { FaReact, FaFire, FaRoute, FaNode } from "react-icons/fa";
const Blog = () => {
  return (
    <div>
      <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
          Blog
        </h1>
      </div>
      <div className="container mx-auto py-9 flex flex-col items-center justify-center">
        <div
          role="list"
          className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div role="listitem" className="focus:outline-none">
            <a
              href="javascript:void(0)"
              className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
            >
              <div className="flex">
                <div className="text-rose-700 text-4xl">
                  <FaReact />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium leading-none text-gray-800">
                    what is cors?
                  </p>
                  <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 ">
                    What is CORS in web API? Cross-origin resource sharing
                    (CORS) is a browser security feature that restricts
                    cross-origin HTTP requests that are initiated from scripts
                    running in the browser. If your REST API's resources receive
                    non-simple cross-origin HTTP requests, you need to enable
                    CORS support.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div role="listitem" className="focus:outline-none">
            <a
              href="javascript:void(0)"
              className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
            >
              <div className="flex">
                <div className="text-rose-700 text-4xl">
                  <FaFire />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium leading-none text-gray-800">
                    Why are you using firebase? What other options do you have
                    to implement authentication?
                  </p>
                  <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 ">
                    Firebase Authentication provides backend services,
                    easy-to-use SDKs, and ready-made UI libraries to
                    authenticate users to your app. It supports authentication
                    using passwords, phone numbers, popular federated identity
                    providers like Google, Facebook and Twitter, and more.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div role="listitem" className="focus:outline-none">
            <a
              href="javascript:void(0)"
              className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
            >
              <div className="flex">
                <div className="text-rose-700 text-4xl">
                  <FaRoute />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium leading-none text-gray-800">
                    How does the private route work?
                  </p>
                  <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 ">
                    The react private route component renders child components (
                    children ) if the user is logged in. If not logged in the
                    user is redirected to the /login page with the return url
                    passed in the location state property.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div role="listitem" className="focus:outline-none">
            <a
              href="javascript:void(0)"
              className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer"
            >
              <div className="flex">
                <div className="text-rose-700 text-4xl">
                  <FaNode />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium leading-none text-gray-800">
                    What is Node? How does Node work?
                  </p>
                  <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 ">
                    Node is used as backend service where javascript works on
                    the server-side of the application. This way javascript is
                    used on both frontend and backend. Node. js runs on chrome
                    v8 engine which converts javascript code into machine code,
                    it is highly scalable, lightweight, fast, and data-intensive
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
