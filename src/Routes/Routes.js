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
        // loader: async () => {
        //   return fetch("https://sikho-sobai-server.vercel.app/category");
        // },
      },
      { path: "/faq", element: <Faq /> },
      { path: "/blog", element: <Blog /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
