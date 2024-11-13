import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import './style/main.scss'

import Home from './pages/Home/home'
import About from './pages/About/about'
import RentalDetail from './pages/RentalDetail/rentalDetail'
import Error from './pages/Error/error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental/:id" element={<RentalDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
  ],
  { basename: '/MonProjetKasa' },
)

export default router
