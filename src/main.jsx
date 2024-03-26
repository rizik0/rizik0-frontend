import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx'
import '../src/scss/stlyes.scss'
import Carousel from './components/Carousel/Carousel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Carousel />
  </React.StrictMode>,
)
