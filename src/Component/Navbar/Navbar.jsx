import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg custom-navbar py-3 fixed-top">
  <div className="container ">
    <Link className="navbar-brand text-light fw-bold fs-1" to="#">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold" aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold" to="portfolio">Portfolio</NavLink>
        </li>
        
       
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold" to="contacts">Contact</NavLink>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}
