import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HashRouter>

      <Routes>

        <Route path="/" element={<CheckoutPage />} />

        <Route
          path="/success"
          element={<SuccessPage />}
        />

      </Routes>

    </HashRouter>

  </React.StrictMode>,
)