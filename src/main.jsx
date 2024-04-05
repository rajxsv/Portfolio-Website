import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./pages/Blogs.jsx";
import Projects from "./pages/Projects.jsx";
import InterviewExperience from "./pages/InterviewExperience.jsx";
import Main from "./pages/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/interview-experiences",
        element: <InterviewExperience />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
