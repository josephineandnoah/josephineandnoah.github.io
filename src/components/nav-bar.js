import React from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import {
  navLinks,
  navLinkItem,
  navLinkText, 
  navBar
} from './layout.module.css'

export default function NavBar() {
  return (
    <div className={navBar} >
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home {` `}
            </Link>
          </li>

          {isLoggedIn() ? (
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About {` `}
              </Link>
            </li>
          ) : null}

          {isLoggedIn() ? (
            <li className={navLinkItem}>
              <Link to="/details" className={navLinkText}>
                Details {` `}
              </Link>
            </li>
          ) : null}
                    
                    {isLoggedIn() ? (
            <li className={navLinkItem}>
              <Link to="/travel" className={navLinkText}>
                Travel {` `}
              </Link>
            </li>
          ) : null}

          {isLoggedIn() ? (
            <li className={navLinkItem}>
              <Link to="/rsvp" className={navLinkText}>
                RSVP {` `}
              </Link>
            </li>
          ) : null}

          {/* {isLoggedIn() ? (
            <a 
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/guest/login`))
                
              } }
            >
              <li className={navLinkItem}>
                Logout
              </li>
            </a>
          ) : (
            <li className={navLinkItem}>
              <Link to="/guest/login" className={navLinkText}>
                Login {` `}
              </Link>
            </li>
          )} */}
        </ul>
      </nav>
    </div>
  )
}