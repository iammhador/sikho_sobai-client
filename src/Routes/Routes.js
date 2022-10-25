import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Courses from "../Components/Courses";
import Faq from "../Components/Faq";
import Blog from "../Components/Blog";
import ErrorPage from "../Components/ErrorPage";
import SignIn from "../Components/Verify/SignIn";
import SignUp from "../Components/Verify/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Courses /> },
      { path: "/courses", element: <Courses /> },
      { path: "/faq", element: <Faq /> },
      { path: "/blog", element: <Blog /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
