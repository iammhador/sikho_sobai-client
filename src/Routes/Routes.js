import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Courses from "../Components/Courses";
import Faq from "../Components/Faq";
import Blog from "../Components/Blog";
import ErrorPage from "../Components/ErrorPage";
import SignIn from "../Components/Verify/SignIn";
import SignUp from "../Components/Verify/SignUp";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import CourseDetails from "../Components/CourseDetails";
import Purchase from "../Components/Purchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch("https://sikho-sobai-server.vercel.app/category");
        },
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: async () => {
          return fetch("https://sikho-sobai-server.vercel.app/courses");
        },
      },
      {
        path: `/courses/:id`,
        element: <CourseDetails />,
        loader: async ({ params }) => {
          return fetch(
            `https://sikho-sobai-server.vercel.app/courses/${params.id}`
          );
        },
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      { path: "/faq", element: <Faq /> },
      { path: "/blog", element: <Blog /> },
      { path: "/profile", element: <Profile /> },

      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
