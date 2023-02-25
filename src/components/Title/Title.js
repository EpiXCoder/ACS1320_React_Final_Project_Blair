import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'


function Title() {
  return (
    <div className="Title">
      <header>
        <h1>The Laura Blair</h1>
        <small className="Title-Subtitle">Lookbook</small>

        <div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">Looks</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title
