import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <div>hello</div>,
  children: [{
    path: "/",
    element: <div>asdasdsd</div>
  }]
}])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App