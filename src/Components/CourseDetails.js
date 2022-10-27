import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload, FaCartArrowDown } from "react-icons/fa";

// import Pdf from "react-to-pdf";
// const ref = React.createRef();
const CourseDetails = () => {
  const courseDetails = useLoaderData([]);
  const {
    title,
    category,
    description,
    ratting,
    student,
    starting_time,
    image,
  } = courseDetails;

  console.log(title);
  return (
    <div className="w-3/5 my-10 mx-auto">
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
          <p className="text-sm text-gray-500">{description}</p>
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
        </dl>
        <div className="flex mt-5">
          <Link
            to="/purchase"
            className="flex items-center justify-center py-2 px-4 mr-4 bg-rose-700 text-white rounded
            hover:bg-indigo-600"
          >
            <FaCartArrowDown className="mr-1" /> Purchase
          </Link>

          {/* <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="flex items-center justify-center py-2 px-4 bg-rose-700 text-white rounded hover:bg-indigo-600"
              >
                <FaDownload className="mr-1" /> PDF Download
              </button>
            )}
          </Pdf> */}

          {/* <div className="App">
            <Pdf targetRef={ref} filename="SikhoSobai.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} className="hidden">
              {PdfFile}
            </div>
          </div> */}
          {/* <Pdf /> */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
