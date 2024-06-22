// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Adjusted import
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import Login from './pages/Login';
import Signup from "./pages/Signup.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);

reportWebVitals();
