import React from 'react';
import { Link } from 'react-router-dom'; // Importiere Link
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo"> 
          NachbarschaftsApp
        </Link>

        {/* Gruppe für die rechten Elemente: Register/Login und Burger-Menü */}
        <div className="nav-right-group">
          {/* Direkte Links: Register und Login (links in dieser Gruppe) */}
          <ul className="direct-nav-menu">
            <li className="nav-item">
              <Link to="/login" className="nav-links nav-links-primary"> 
                Login
              </Link>
            </li>
          </ul>

          {/* Burger-Menü Container (rechts in dieser Gruppe) */}
          <div className="burger-menu-container">
            <div className="burger-icon">
              {/* Hier ist unser Burger-Icon - wir stylen es mit CSS */}
              ☰ {/* Unicode-Zeichen für das Burger-Icon */}
            </div>
            {/* Die versteckten Navigationslinks */}
            <ul className="burger-nav-menu">
              <li className="nav-item">
                <Link to="/home" className="nav-links"> 
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-links"> 
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-links"> 
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/help" className="nav-links"> 
                  Hilfe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-links"> 
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-links"> 
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;