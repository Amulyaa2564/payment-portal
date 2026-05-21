import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<CheckoutPage />} />

        <Route
          path="/success"
          element={<SuccessPage />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)