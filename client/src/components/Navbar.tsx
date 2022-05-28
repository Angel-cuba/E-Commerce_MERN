import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Navbar.scss'
import { ToggleTheme } from './ToggleTheme'

const Navbar = () => {
  return (
    <div  className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Logo</h1>
          </div>
        <div className="navbar-menu">
          <ToggleTheme/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
            </div>
            </div>
    </div>
  )
}

export default Navbar