import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Error404 from "./pages/Error404";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "course",
    element: <Course />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:id",
    element: <BlogDetails />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
