import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import { AuthContext } from "../Context.js/Context";
import userAvater from "../Assets/batman.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);

  //# Sign Out :
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("You have been sing out");
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="bg-rose-700">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} className="w-8" alt="logo" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Sikho Sobai
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide transition-colors duration-200 text-gray-900"
                      : "font-medium tracking-wide transition-colors duration-200 text-gray-100"
                  }
                >
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide transition-colors duration-200 text-gray-900"
                      : "font-medium tracking-wide transition-colors duration-200 text-gray-100"
                  }
                >
                  Faq
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide transition-colors duration-200 text-gray-900"
                      : "font-medium tracking-wide transition-colors duration-200 text-gray-100"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <div className="mx-auto flex flex-col items-start">
                <div className="cursor-pointer my-5 rounded-full bg-gray-200 relative shadow-sm">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle1"
                    className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                  />
                  <label
                    htmlFor="toggle1"
                    className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  />
                </div>
                <style>
                  {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
                </style>
              </div>
              {user && user.uid ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={user?.photoURL ? user.photoURL : userAvater}
                        alt="User Profile"
                        title={user.displayName}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <button onClick={handleSignOut}>Sign Out</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <li>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-deep-blue-accent-400 hover:bg-deep-sky-accent-700 focus:shadow-outline focus:outline-none"
                        : "inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-blue-accent-400 hover:bg-deep-sky-accent-700 focus:shadow-outline focus:outline-none"
                    }
                  >
                    Sign in
                  </NavLink>
                </li>
              )}
            </ul>
            <div className="lg:hidden">
              <button
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/" className="inline-flex items-center">
                          <img src={logo} alt="logo" className="w-8" />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Sikho Sobai
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide transition-colors duration-200 text-rose-700"
                                : "font-medium tracking-wide transition-colors duration-200 text-gray-900"
                            }
                          >
                            Courses
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/faq"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide transition-colors duration-200 text-rose-700"
                                : "font-medium tracking-wide transition-colors duration-200 text-gray-900"
                            }
                          >
                            Faq
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide transition-colors duration-200 text-rose-700"
                                : "font-medium tracking-wide transition-colors duration-200 text-gray-900"
                            }
                          >
                            Blog
                          </NavLink>
                        </li>
                        <div className="mx-auto flex flex-col items-start">
                          <div className="cursor-pointer my-5 rounded-full bg-gray-200 relative shadow-sm">
                            <input
                              type="checkbox"
                              name="toggle"
                              id="toggle1"
                              className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                            />
                            <label
                              htmlFor="toggle1"
                              className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                            />
                          </div>
                          <style>
                            {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
                          </style>
                        </div>
                        {user && user?.uid ? (
                          <div className="dropdown dropdown-right">
                            <label
                              tabIndex={0}
                              className="btn btn-ghost btn-circle avatar"
                            >
                              {/* <div className="w-10 rounded-full">
                                <img
                                  src={
                                    user?.photoURL ? user.photoURL : userAvater
                                  }
                                  alt="User Profile"
                                  title={user.displayName}
                                />
                              </div> */}

                              <div className="w-10 rounded-full">
                                <img
                                  src={
                                    user?.photoURL ? user.photoURL : userAvater
                                  }
                                  alt="User Profile"
                                  title={user.displayName}
                                />
                              </div>
                            </label>
                            <ul
                              tabIndex={0}
                              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                              <li>
                                <Link to="/profile" className="justify-between">
                                  Profile
                                  <span className="badge">New</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <button onClick={handleSignOut}>
                                    Sign Out
                                  </button>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <li>
                            <NavLink
                              to="/signin"
                              className={({ isActive }) =>
                                isActive
                                  ? "inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-rose-700 transition duration-200 rounded shadow-md bg-deep-blue-accent-400 hover:bg-deep-sky-accent-700 focus:shadow-outline focus:outline-none "
                                  : "inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-deep-blue-accent-400 hover:bg-deep-sky-accent-700 focus:shadow-outline focus:outline-none"
                              }
                            >
                              Sign in
                            </NavLink>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
