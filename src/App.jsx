import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Outlet} from "react-router-dom"
// import Header from './components/Header/Header';
import TopStag from './components/TopStag';
import {useSelector} from 'react-redux'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);
  const authStatus = useSelector((state) => state.auth.status)

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

return !loading ? (
  <>
  <TopStag />
  {authStatus ?
  (<Header />) : null}
  <main>
  <Outlet />
  </main>
  </>
) : <Loader />;

}

export default App;