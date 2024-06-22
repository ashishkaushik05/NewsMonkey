import React from 'react';
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import News from './components/News.jsx';
import Login from './pages/Login';
import Signup from "./pages/Signup.jsx"

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
            {
              path: "/",
              element: <News pageSize={3} country="in" newscategory="general"/>,
            },
            {
              path: "business",
              element: <News pageSize={3} country="in" newscategory="business"/>,
            },
            {
              path: "entertainment",
              element: <News pageSize={3} country="in" newscategory="entertainment"/>,
            },
            {
              path: "general",
              element: <News pageSize={3} country="in" newscategory="entertainment"/>,
            },
            {
              path: "health",
              element: <News pageSize={3} country="in" newscategory="health"/>,
            },
            {
              path: "science",
              element: <News pageSize={3} country="in" newscategory="science"/>,
            },
            {
              path: "sports",
              element: <News pageSize={3} country="in" newscategory="sports"/>,
            },
            {
              path: "technology",
              element: <News pageSize={3} country="in" newscategory="technology"/>,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
