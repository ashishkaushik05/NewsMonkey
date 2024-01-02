import './App.css';
import Navbar from './components/Navbar';
import React, {Component} from 'react';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News pageSize={5} country="in" category="general"/>}> </Route>
          <Route exact path="/Business" element={<News pageSize={5} country="in" category="business"/>}> </Route>
          <Route exact path="/Entertainment" element={<News pageSize={5} country="in" category="entertainment"/>}> </Route>
          <Route exact path="/Health" element={<News pageSize={5} country="in" category="health"/>}> </Route>
          <Route exact path="/Science" element={<News pageSize={5} country="in" category="science"/>}> </Route>
          <Route exact path="/Sports" element={<News pageSize={5} country="in" category="sports"/>}> </Route>
          <Route exact path="/Technology" element={<News pageSize={5} country="in" category="technology"/>}> </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
