import React, { Component } from 'react'

import {Link} from "react-router-dom";


export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        <li className = "nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
        <li className = "nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
        <li className = "nav-item"><Link className="nav-link" to="/General">General</Link></li>
        <li className = "nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
        <li className = "nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
        <li className = "nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
        <li className = "nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
      </div> 
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
