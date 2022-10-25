import { React, useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <div>
      <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
          FAQ's
        </h1>

        <div className="lg:w-8/12 w-full mx-auto bg-gray-300">
          {/* <!-- Question 1 --> */}
          <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

          <div className="w-full md:px-6  ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className=" ">
                <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                    Q1.
                  </span>{" "}
                  How do i know if a product is available in boutiques?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className={"transform " + (open ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Remember you can query the status of your orders any time in My
                orders in the My account section. if you are not resigered at
                Mango.com, you can access dierectly in the Orders section. In
                this cause, you will have enter your e-mail address and order
                number.
              </p>
            </div>
          </div>

          {/* <!-- Question 2 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6 ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                    Q2.
                  </span>{" "}
                  How can i find the prices or get other information about
                  chanel products?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen2(!open2)}
              >
                <svg
                  className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Remember you can query the status of your orders any time in My
                orders in the My account section. if you are not resigered at
                Mango.com, you can access dierectly in the Orders section. In
                this cause, you will have enter your e-mail address and order
                number.
              </p>
            </div>
          </div>

          {/* <!-- Question 3 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6 ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                    Q3.
                  </span>
                  How many collections come out every year?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen3(!open3)}
              >
                <svg
                  className={"transform " + (open ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Remember you can query the status of your orders any time in My
                orders in the My account section. if you are not resigered at
                Mango.com, you can access dierectly in the Orders section. In
                this cause, you will have enter your e-mail address and order
                number.
              </p>
            </div>
          </div>

          {/* <!-- Question 4 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6  ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                    Q4.
                  </span>
                  Are all of the fashion collections features on the website?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen4(!open4)}
              >
                <svg
                  className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Remember you can query the status of your orders any time in My
                orders in the My account section. if you are not resigered at
                Mango.com, you can access dierectly in the Orders section. In
                this cause, you will have enter your e-mail address and order
                number.
              </p>
            </div>
          </div>

          {/* <!-- Question 5 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6 ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                    Q5.
                  </span>
                  Where do i find products that i have seen in magazines or
                  Social Media?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen5(!open5)}
              >
                <svg
                  className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Remember you can query the status of your orders any time in My
                orders in the My account section. if you are not resigered at
                Mango.com, you can access dierectly in the Orders section. In
                this cause, you will have enter your e-mail address and order
                number.
              </p>
            </div>
          </div>

          <hr className=" w-full lg:mt-10 my-8" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
