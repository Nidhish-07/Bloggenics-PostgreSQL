import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WriteBlog from "./pages/WriteBlog";
import PostBlog from './pages/PostBlog'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/write",
        element: <WriteBlog />,
      },
      {
        path: "/post/:id",
        element: <PostBlog />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,

  },
  {
    path: "/login",
    element: <Login />,

  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
