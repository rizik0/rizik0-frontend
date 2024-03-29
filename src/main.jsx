import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx'
import '../src/scss/stlyes.scss'
import Carousel from './components/Carousel/Carousel.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar id="Navbar"/>
    <Carousel id="Carousel"/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
