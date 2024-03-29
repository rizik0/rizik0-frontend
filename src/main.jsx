import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx'
import '../src/scss/stlyes.scss'
import Carousel from './components/Carousel/Carousel.jsx'
import Root from "./routes/root";
import GamePage from "./routes/gamepage";
import LobbyPage from "./routes/lobbypage";
import TechPage from "./routes/techpage";
import ErrorPage from "./routes/error-page"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/game",
    element:  <GamePage UserColor="red" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lobby",
    element:  <LobbyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tech",
    element:  <TechPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
